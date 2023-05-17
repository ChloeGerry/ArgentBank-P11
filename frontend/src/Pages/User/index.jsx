import Header from '../../components/layouts/Header';
import styled from 'styled-components';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Account from '../../components/Account';

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;

const MainHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

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
          <Button padding="10px" text="Edit Name" />
        </MainHeader>
        <Title title="Accounts" />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button={
            <Button
              display="block"
              width="100%"
              fontSize="1.1rem"
              marginTop="1rem"
              mediaQuery="200px"
              text="View transactions"
            />
          }
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          button={
            <Button
              display="block"
              width="100%"
              fontSize="1.1rem"
              marginTop="1rem"
              mediaQuery="200px"
              text="View transactions"
            />
          }
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
          button={
            <Button
              display="block"
              width="100%"
              fontSize="1.1rem"
              marginTop="1rem"
              mediaQuery="200px"
              text="View transactions"
            />
          }
        />
      </Main>
    </>
  );
};

export default User;
