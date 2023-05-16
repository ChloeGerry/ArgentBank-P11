import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/layouts/Header';

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

const LoginIcon = styled.i`
  box-sizing: border-box;
  background-color: white;
  margin: 0 auto;
  padding: 1rem;
  font-size: 5rem;
`;

const LoginTitle = styled.h1`
  margin: auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRememberWrapper = styled.div`
  display: flex;
`;

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const LoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
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
          <LoginIcon className="fa fa-user-circle"></LoginIcon>
          <LoginTitle>Sign In</LoginTitle>
          <form>
            <InputWrapper>
              <InputLabel for="username">Username</InputLabel>
              <Input type="text" id="username" />
            </InputWrapper>
            <InputWrapper>
              <InputLabel for="password">Password</InputLabel>
              <Input type="password" id="password" />
            </InputWrapper>
            <InputRememberWrapper>
              <input type="checkbox" id="remember-me" />
              <InputRememberLabel for="remember-me">
                Remember me
              </InputRememberLabel>
            </InputRememberWrapper>
            <LinkToUserPage to="/users/:id">
              <LoginButton>Sign In</LoginButton>
            </LinkToUserPage>
          </form>
        </LoginWrapper>
      </Main>
    </>
  );
};

export default Login;
