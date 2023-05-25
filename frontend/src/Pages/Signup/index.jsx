import Header from '../../components/layouts/Header';
import { Main, SignupWrapper, SignupTitle } from './signup';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
  return (
    <>
      <Header login="false" />
      <Main>
        <SignupWrapper>
          <Icon
            boxSizing="border-box"
            backgroundColor="white"
            margin="0 auto"
            padding="0 0 1rem 0"
            fontSize="5rem"
          />
          <SignupTitle>Sign Up</SignupTitle>
          <form>
            <Input
              flexDirection="column"
              htmlFor="email"
              type="email"
              id="email"
              text="Email"
            />
            <Input
              flexDirection="column"
              htmlFor="password"
              type="password"
              id="password"
              text="Password"
            />
            <Input
              flexDirection="column"
              htmlFor="firstName"
              type="text"
              id="firstName"
              text="First Name"
            />
            <Input
              flexDirection="column"
              htmlFor="lastName"
              type="text"
              id="lastName"
              text="Last Name"
            />
            <Input
              flexDirection="column"
              htmlFor="userName"
              type="text"
              id="userName"
              text="User Name"
            />
            <Button
              display="block"
              width="100%"
              fontSize="1.1rem"
              margin="1rem 0 0 0"
              text="Sign Up"
              type="submit"
            />
          </form>
        </SignupWrapper>
      </Main>
    </>
  );
};

export default SignUp;
