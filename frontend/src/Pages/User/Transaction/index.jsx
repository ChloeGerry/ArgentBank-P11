import Header from '../../../components/layouts/Header';
import Account from '../../../components/Account';
import LinkNavigation from '../../../components/layouts/Link';
import styled from 'styled-components';
import Collapse from '../../../components/Collapse';

const Main = styled.main`
  flex: 1;
  background-color: #12002b;
`;

const Icon = styled.i`
  font-size: 56px;
  color: #2c3e50;
`;

const CollapseWrapper = styled.section`
  margin: 0 auto;
  width: 80%;
`;

const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 8px 24px;
`;

const CollapseTitleWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const CollapseTitle = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #2c3e50;
`;

const UserTransactions = () => {
  return (
    <>
      <Header />
      <Main>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button={
            <LinkNavigation to="/users/:id">
              <Icon className="fa-sharp fa-solid fa-x"></Icon>
            </LinkNavigation>
          }
        />
        <CollapseWrapper>
          <CollapseHeader>
            <CollapseTitleWrapper>
              <CollapseTitle>Date</CollapseTitle>
              <CollapseTitle>Description</CollapseTitle>
            </CollapseTitleWrapper>
            <CollapseTitleWrapper>
              <CollapseTitle>Amout</CollapseTitle>
              <CollapseTitle>Balance</CollapseTitle>
              <CollapseTitle> </CollapseTitle>
            </CollapseTitleWrapper>
          </CollapseHeader>
          <Collapse
            date="27/02/20"
            description="Golden Sun Bakery"
            amount="$8.00"
            balance="$298.00"
            text="coucou"
          />
        </CollapseWrapper>
      </Main>
    </>
  );
};

export default UserTransactions;
