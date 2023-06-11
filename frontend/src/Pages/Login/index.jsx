import Header from '../../components/layouts/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from '../../components/Icon';
import LinkNavigation from '../../components/layouts/Link';
import {
  Main,
  LoginWrapper,
  LoginTitle,
  InputRememberWrapper,
  InputRememberLabel,
  ThrowError,
} from './login';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../actions/profile.action';
import { getUser } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isUserRemembered, setUserRememebered] = useState(false);

  const [error, setError] = useState({
    email: '',
    password: '',
    credentials: '',
  });

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    const storageExpirationDate = localStorage.getItem('expirationDate');
    const expirationDateExpired = new Date().getTime() > storageExpirationDate;

    if (expirationDateExpired) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationDate');
    }

    if (storageToken) {
      dispatch(getProfile(storageToken));
    }
    if (profile.data && storageToken) {
      navigate(`/profile/${profile.data.id}`);
    }
  }, [dispatch, navigate, profile.data]);

  useEffect(() => {
    if (isUserRemembered && user.data) {
      const FOUR_HOURS_MS = 1000 * 60 * 60 * 4;
      const date = new Date().getTime() + FOUR_HOURS_MS;
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('expirationDate', date);
    }
  }, [isUserRemembered, user.data]);

  useEffect(() => {
    if (user.data) {
      const token = user?.data.token;
      dispatch(getProfile(token));
    }
    if (user.data && profile.data) {
      navigate(`/profile/${profile.data.id}`);
      form.current.reset();
    }
  }, [dispatch, navigate, profile.data, user.data, user.profile]);

  useEffect(() => {
    if (user.hasAuthentificationFailed) {
      setError({
        ...error,
        credentials: 'Your credentials are wrong',
      });
    }
  }, [error.credentials, user.hasAuthentificationFailed, user.isLoading]);

  const handleForm = (event) => {
    event.preventDefault();

    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    if (formData.email === '') {
      setError({
        ...error,
        email: 'You have to enter an email',
      });
      return;
    }

    if (formData.password === '') {
      setError({
        ...error,
        password: 'You have to enter a password',
      });
      return;
    }

    dispatch(getUser(formData));

    setError({
      email: '',
      password: '',
      credentials: '',
    });
  };

  return (
    <>
      <Header login="false" />
      <Main>
        <LoginWrapper>
          <Icon
            boxSizing="border-box"
            backgroundColor="white"
            margin="0 auto"
            padding="0 0 1rem 0"
            fontSize="5rem"
          />
          <LoginTitle>Sign In</LoginTitle>
          <form ref={form} onSubmit={(event) => handleForm(event)}>
            <Input
              flexDirection="column"
              htmlFor="email"
              type="email"
              id="email"
              text="Email"
            />
            <ThrowError>{error.credentials}</ThrowError>
            <ThrowError>{error.email}</ThrowError>
            <Input
              flexDirection="column"
              htmlFor="password"
              type="password"
              id="password"
              text="Password"
            />
            <ThrowError>{error.password}</ThrowError>
            <InputRememberWrapper>
              <input
                type="checkbox"
                id="remember-me"
                onClick={() => setUserRememebered(!isUserRemembered)}
              />
              <InputRememberLabel htmlFor="remember-me">
                Remember me
              </InputRememberLabel>
            </InputRememberWrapper>
            <Button
              display="block"
              width="100%"
              fontSize="1.1rem"
              margin="1rem 0 2rem 0"
              text="Sign In"
              type="submit"
            />
          </form>
          <LinkNavigation to="/signup" color="#2c3e50">
            New member ? Sign up here !
          </LinkNavigation>
        </LoginWrapper>
      </Main>
    </>
  );
};

export default Login;
