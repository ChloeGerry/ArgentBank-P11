import Header from '../../components/layouts/Header';
import { Main, SignupWrapper, SignupTitle } from './signup';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { addProfile } from '../../actions/profile.action';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const SignUp = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profileReducer);

  const [error, setError] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
  });

  useEffect(() => {
    if (profile.data) {
      navigate(`/profile/:${profile.data._id}`);
      form.current.reset();
    }
  }, [navigate, profile.data]);

  const handleForm = (event) => {
    event.preventDefault();

    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      firstName: event.target[2].value,
      lastName: event.target[3].value,
      userName: event.target[4].value,
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

    if (formData.firstName === '') {
      setError({
        ...error,
        firstName: 'You have to enter your first name',
      });
      return;
    }

    if (formData.lastName === '') {
      setError({
        ...error,
        lastName: 'You have to enter your last name',
      });
      return;
    }

    if (formData.userName === '') {
      setError({
        ...error,
        userName: 'You have to enter a username',
      });
      return;
    }

    dispatch(addProfile(formData));
    setError({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      userName: '',
    });
  };

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
          <form ref={form} onSubmit={(event) => handleForm(event)}>
            <Input
              flexDirection="column"
              htmlFor="email"
              type="email"
              id="email"
              text="Email"
            />
            {error.email}
            <Input
              flexDirection="column"
              htmlFor="password"
              type="password"
              id="password"
              text="Password"
            />
            {error.password}
            <Input
              flexDirection="column"
              htmlFor="firstName"
              type="text"
              id="firstName"
              text="First Name"
            />
            {error.firstName}
            <Input
              flexDirection="column"
              htmlFor="lastName"
              type="text"
              id="lastName"
              text="Last Name"
            />
            {error.lastName}
            <Input
              flexDirection="column"
              htmlFor="userName"
              type="text"
              id="userName"
              text="User Name"
            />
            {error.userName}
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
