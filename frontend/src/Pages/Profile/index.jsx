import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';
import LinkNavigation from '../../components/layouts/Link';
import { Main, MainHeader, Form, MainTitle, ThrowError } from './profile';
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
  const [isFormValid, setFormValid] = useState({
    userName: '',
  });

  const handleForm = (event) => {
    event.preventDefault();
    const token = user.data.token;

    const formData = {
      userName: event.target[0].value,
    };

    setFormValid(formData.userName);

    if (formData.userName !== '') {
      dispatch(editProfile(token, formData));
      form.current.reset();
    }
  };

  return (
    <>
      <Header login="true" />
      <Main>
        <MainHeader>
          {isEditInfoVisible ? (
            <>
              <MainTitle>Edit user info</MainTitle>
              <Form ref={form} onSubmit={(event) => handleForm(event)}>
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="userName"
                  type="text"
                  id="userName"
                  text="User Name :"
                />
                {isFormValid === '' && (
                  <ThrowError>You have to choose a proper user name</ThrowError>
                )}
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="firstName"
                  type="text"
                  id="firstName"
                  text="First Name :"
                />
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="lastName"
                  type="text"
                  id="lastName"
                  text="Last Name :"
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
                    onClick={() => setEditInfoVisible(!isEditInfoVisible)}
                  />
                </div>
              </Form>
            </>
          ) : (
            <>
              <MainTitle>
                Welcome back
                <br />
                {profile?.data.firstName} {profile?.data.lastName}
              </MainTitle>
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
              to={`/profile/:${profile.data.id}/transactions/:8349`}
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
              to={`/profile/:${profile.data.id}/transactions/:6712`}
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
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          button={
            <LinkNavigation
              to={`/profile/:${profile.data.id}/transactions/:8349`}
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
