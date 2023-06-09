import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';
import LinkNavigation from '../../components/layouts/Link';
import { Main, MainHeader, Form, ThrowMessage } from './profile';
import { useState, useRef } from 'react';
import Input from '../../components/Input';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../actions/profile.action';

const Profile = () => {
  const [isEditInfoVisible, setEditInfoVisible] = useState(false);
  const profile = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.userReducer);
  const form = useRef();
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    userName: '',
    onSuccess: false,
  });

  const resetMessages = () => {
    setEditInfoVisible(!isEditInfoVisible);
    setMessage({
      userName: '',
      onSuccess: false,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    let token;
    user?.data
      ? (token = user?.data.token)
      : (token = localStorage.getItem('token'));

    const formData = {
      userName: event.target[0].value,
    };

    if (formData.userName === '') {
      setMessage({
        userName: 'You have to enter a user name',
      });
      return;
    }

    dispatch(editProfile(token, formData));
    form.current.reset();

    if (formData.userName !== '') {
      setMessage({
        userName: 'User name successfully changed',
        onSuccess: true,
      });
      return;
    }
  };

  message.onSuccess &&
    setTimeout(() => {
      setEditInfoVisible(!isEditInfoVisible);
      setMessage({
        userName: '',
        onSuccess: false,
      });
    }, 1000);

  return (
    <>
      <Header login="true" />
      <Main>
        <MainHeader>
          {isEditInfoVisible ? (
            <>
              <h1>Edit user info</h1>
              <Form ref={form} onSubmit={(event) => handleForm(event)}>
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="userName"
                  name="userName"
                  type="text"
                  id="userName"
                  text="User Name :"
                />
                <ThrowMessage>{message.userName}</ThrowMessage>
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="firstName"
                  name="firstName"
                  type="text"
                  id="firstName"
                  text="First Name :"
                  display="none"
                />
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="lastName"
                  name="lastName"
                  type="text"
                  id="lastName"
                  text="Last Name :"
                  display="none"
                />
                <div>
                  <Button
                    type="submit"
                    text="Save"
                    padding="8px 40px"
                    margin="24px 8px 0 0"
                  />
                  <Button
                    text="Cancel"
                    padding="8px 40px"
                    margin="24px 0 0 0"
                    onClick={() => resetMessages()}
                  />
                </div>
              </Form>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {profile.data.firstName} {profile.data.lastName}
              </h1>
              <Button
                onClick={() => setEditInfoVisible(!isEditInfoVisible)}
                padding="10px"
                text="Edit Name"
              />
            </>
          )}
        </MainHeader>
        <Title title="Accounts" />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button={
            <LinkNavigation
              to={`/profile/${profile.data.id}/account/8349/transactions`}
            >
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                marginTop="1rem"
                mediaQuery="200px"
                text="View transactions"
              />
            </LinkNavigation>
          }
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          button={
            <LinkNavigation
              to={`/profile/${profile.data.id}/account/6712/transactions`}
            >
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                marginTop="1rem"
                mediaQuery="200px"
                text="View transactions"
              />
            </LinkNavigation>
          }
        />
        <Account
          title="Argent Bank Credit Card (x1725)"
          amount="$184.30"
          description="Current Balance"
          button={
            <LinkNavigation
              to={`/profile/${profile.data.id}/account/1725/transactions`}
            >
              <Button
                display="block"
                width="100%"
                fontSize="1.1rem"
                marginTop="1rem"
                mediaQuery="200px"
                text="View transactions"
              />
            </LinkNavigation>
          }
        />
      </Main>
    </>
  );
};

export default Profile;
