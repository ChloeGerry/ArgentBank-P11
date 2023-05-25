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
} from './login';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/user.action';
import { getProfile } from '../../actions/profile.action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  });

  const handleUsername = (e) => {
    const updateFormState = {
      ...formState,
      email: {
        value: e.target.value,
        isValid: true,
      },
    };
    setFormState(updateFormState);
  };

  const handlePassword = (e) => {
    const updateFormState = {
      ...formState,
      password: {
        value: e.target.value,
        isValid: true,
      },
    };
    setFormState(updateFormState);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = {
      email: formState.email.value,
      password: formState.password.value,
    };

    if (
      formState.email.isValid &&
      formState.password.isValid &&
      formState.email.value !== '' &&
      formState.password.value !== ''
    ) {
      await dispatch(getUser(formData));
      const token = user?.body.token;
      await dispatch(getProfile(token));
      navigate(`/profile/:${profile.body.id}`);
      form.current.reset();
    } else {
      console.log('Veuillez remplir tous les chammps');
    }
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
          <form ref={form} onSubmit={(e) => handleForm(e)}>
            <Input
              flexDirection="column"
              htmlFor="email"
              type="email"
              id="email"
              text="Email"
              value={formState.email.value}
              onChange={handleUsername}
            />
            <Input
              flexDirection="column"
              htmlFor="password"
              type="password"
              id="password"
              text="Password"
              value={formState.password.value}
              onChange={handlePassword}
            />
            <InputRememberWrapper>
              <input type="checkbox" id="remember-me" />
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
