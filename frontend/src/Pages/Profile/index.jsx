import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';
import LinkNavigation from '../../components/layouts/Link';
import { Main, MainHeader, Form, MainTitle } from './profile';
import { useState } from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [isEditInfoVisible, setEditInfoVisible] = useState(false);
  const profile = useSelector((state) => state.profileReducer);

  return (
    <>
      <Header login="true" />
      <Main>
        <MainHeader>
          {isEditInfoVisible ? (
            <>
              <MainTitle>Edit user info</MainTitle>
              <Form>
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="userName"
                  type="text"
                  id="userName"
                  text="User Name :"
                />
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
              </Form>
              <Button text="Save" padding="8px 40px" margin="24px 8px 0 0" />
              <Button
                text="Cancel"
                padding="8px 40px"
                margin="24px 0 0 0"
                onClick={() => setEditInfoVisible(!isEditInfoVisible)}
              />
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
            <LinkNavigation to="/users/:id/transactions">
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
            <LinkNavigation to="/users/:id/transactions">
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
            <LinkNavigation to="/users/:id/transactions">
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
