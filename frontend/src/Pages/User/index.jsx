import Header from '../../components/layouts/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';
import LinkNavigation from '../../components/layouts/Link';
import { Main, MainHeader } from './user';

const User = () => {
  return (
    <>
      <Header login="true" />
      <Main>
        <MainHeader>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <LinkNavigation to="/users/:id/edit">
            <Button padding="10px" text="Edit Name" />
          </LinkNavigation>
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

export default User;
