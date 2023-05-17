import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/layouts/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from '../../components/Icon';

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

const LinkToUserPage = styled(Link)`
  text-decoration: none;
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
          {/* <LoginIcon className="fa fa-user-circle"></LoginIcon> */}
          <LoginTitle>Sign In</LoginTitle>
          <form>
            <Input for="username" type="text" id="username" text="Username" />
            <Input
              for="password"
              type="password"
              id="password"
              text="Password"
            />
            <InputRememberWrapper>
              <input type="checkbox" id="remember-me" />
              <InputRememberLabel for="remember-me">
                Remember me
              </InputRememberLabel>
            </InputRememberWrapper>
            <LinkToUserPage to="/users/:id">
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                marginTop="1rem"
                text="Sign In"
              />
            </LinkToUserPage>
          </form>
        </LoginWrapper>
      </Main>
    </>
  );
};

export default Login;
