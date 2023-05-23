import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';
import LinkNavigation from '../../components/layouts/Link';
import { Main, MainHeader, Form, MainTitle } from './profile';
import { useState } from 'react';
import Input from '../../components/Input';

const Profile = () => {
  const [isEditInfoVisible, setEditInfoVisible] = useState(false);

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
                  htmlFor="username"
                  type="text"
                  id="username"
                  text="User name :"
                />
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="firstname"
                  type="text"
                  id="firstname"
                  text="First name :"
                />
                <Input
                  alignItems="center"
                  margin="8px"
                  htmlFor="lastname"
                  type="text"
                  id="lastname"
                  text="Last name :"
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
                Tony Jarvis !
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
