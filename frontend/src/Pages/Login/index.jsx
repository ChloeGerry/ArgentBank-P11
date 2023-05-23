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

const Login = () => {
  const [isUserExist, setUserExist] = useState(false);
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      username: user.userName,
      password: user.password,
    };

    console.log(postData);
    await dispatch(getUser(postData));
    setUserExist(!isUserExist);
    form.current.reset();
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
            padding="1rem"
            fontSize="5rem"
          />
          <LoginTitle>Sign In</LoginTitle>
          <form ref={form} onSubmit={(e) => handleForm(e)}>
            <Input
              flexDirection="column"
              htmlFor="username"
              type="text"
              id="username"
              text="Username"
            />
            <Input
              flexDirection="column"
              htmlFor="password"
              type="password"
              id="password"
              text="Password"
            />
            <InputRememberWrapper>
              <input type="checkbox" id="remember-me" />
              <InputRememberLabel htmlFor="remember-me">
                Remember me
              </InputRememberLabel>
            </InputRememberWrapper>
            {isUserExist ? (
              <LinkNavigation to="/profile/:id">
                <Button
                  display="block"
                  width="100%"
                  fontSize="1.1rem"
                  margin="1rem 0 0 0"
                  text="Sign In"
                />
              </LinkNavigation>
            ) : (
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                margin="1rem 0 0 0"
                text="Sign In"
              />
            )}
          </form>
        </LoginWrapper>
      </Main>
    </>
  );
};

export default Login;
