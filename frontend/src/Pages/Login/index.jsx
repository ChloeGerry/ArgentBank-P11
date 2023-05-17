import styled from 'styled-components';
import Header from '../../components/layouts/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from '../../components/Icon';
import LinkNavigation from '../../components/layouts/Link';

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;

const LoginWrapper = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const LoginTitle = styled.h1`
  margin: auto;
`;

const InputRememberWrapper = styled.div`
  display: flex;
`;

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const Login = () => {
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
          <form>
            <Input
              htmlFor="username"
              type="text"
              id="username"
              text="Username"
            />
            <Input
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
            <LinkNavigation to="/users/:id">
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                marginTop="1rem"
                text="Sign In"
              />
            </LinkNavigation>
          </form>
        </LoginWrapper>
      </Main>
    </>
  );
};

export default Login;
