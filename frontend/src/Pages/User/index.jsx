import Header from '../../components/layouts/Header';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;

const MainHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const SectionTitle = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const AccountWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
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
          <EditButton>Edit Name</EditButton>
        </MainHeader>
        <SectionTitle>Accounts</SectionTitle>
        <AccountWrapper>
          <AccountContentWrapper>
            <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
            <AccountAmount>$2,082.79</AccountAmount>
            <AccountAmountDescription>
              Available Balance
            </AccountAmountDescription>
          </AccountContentWrapper>
          <TransactionButtonWrapper>
            <TransactionButton>View transactions</TransactionButton>
          </TransactionButtonWrapper>
        </AccountWrapper>
        <AccountWrapper>
          <AccountContentWrapper>
            <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
            <AccountAmount>$10,928.42</AccountAmount>
            <AccountAmountDescription>
              Available Balance
            </AccountAmountDescription>
          </AccountContentWrapper>
          <TransactionButtonWrapper>
            <TransactionButton>View transactions</TransactionButton>
          </TransactionButtonWrapper>
        </AccountWrapper>
        <AccountWrapper>
          <AccountContentWrapper>
            <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
            <AccountAmount>$184.30</AccountAmount>
            <AccountAmountDescription>Current Balance</AccountAmountDescription>
          </AccountContentWrapper>
          <TransactionButtonWrapper>
            <TransactionButton>View transactions</TransactionButton>
          </TransactionButtonWrapper>
        </AccountWrapper>
      </Main>
    </>
  );
};

export default User;
