import Header from '../../../components/layouts/Header';
import Account from '../../../components/Account';
import LinkNavigation from '../../../components/layouts/Link';
import Collapse from '../../../components/Collapse';
import {
  Main,
  Icon,
  CollapseWrapper,
  CollapseHeader,
  CollapseTitleWrapper,
  CollapseTitle,
} from './transaction';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfileTransactions = () => {
  const profile = useSelector((state) => state.profileReducer);
  const userIds = useParams();
  const accountId = userIds.account.replace(/:/g, '');

  return (
    <>
      <Header />
      <Main>
        {accountId === '8349' ? (
          <Account
            title={`Argent Bank Checking (x${accountId})`}
            amount="$2,082.79"
            description="Available Balance"
            button={
              <LinkNavigation to={`/profile/:${profile.data.id}`}>
                <Icon className="fa-sharp fa-solid fa-x"></Icon>
              </LinkNavigation>
            }
          />
        ) : (
          <Account
            title={`Argent Bank Savings (x${accountId})`}
            amount="$10,928.42"
            description="Available Balance"
            button={
              <LinkNavigation to={`/profile/:${profile.data.id}`}>
                <Icon className="fa-sharp fa-solid fa-x"></Icon>
              </LinkNavigation>
            }
          />
        )}
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
            padding="16px 0px"
            flexDirection="column"
            margin="12px"
            date="27/02/20"
            description="Golden Sun Bakery"
            amount="$8.00"
            balance="$298.00"
            transactionType="Transaction type"
            transactionTypeName="Electronic"
            transactionCategory="Category"
            transactionCategoryName="Food"
            transactionNote="Note"
            transactionNoteText="..."
          />
        </CollapseWrapper>
      </Main>
    </>
  );
};

export default ProfileTransactions;
