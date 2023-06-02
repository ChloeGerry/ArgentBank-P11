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
import { useState } from 'react';

const ProfileTransactions = () => {
  const profile = useSelector((state) => state.profileReducer);
  const userIds = useParams();
  const accountId = userIds.account;
  const [category, setCategory] = useState('Food');
  const [note, setNote] = useState('...');

  const changeCategory = (category) => {
    setCategory(category);
  };

  const changeNote = (note) => {
    setNote(note);
  };

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
              <LinkNavigation to={`/profile/${profile.data.id}`}>
                <Icon className="fa-sharp fa-solid fa-x"></Icon>
              </LinkNavigation>
            }
          />
        ) : accountId === '6712' ? (
          <Account
            title={`Argent Bank Savings (x${accountId})`}
            amount="$10,928.42"
            description="Available Balance"
            button={
              <LinkNavigation to={`/profile/${profile.data.id}`}>
                <Icon className="fa-sharp fa-solid fa-x"></Icon>
              </LinkNavigation>
            }
          />
        ) : (
          <Account
            title={`Argent Bank Credit Card (x${accountId})`}
            amount="$184.30"
            description="Current Balance"
            button={
              <LinkNavigation to={`/profile/${profile.data.id}`}>
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
            transactionCategoryName={category}
            transactionNote="Note"
            transactionNoteText={note}
            onChangeCategory={changeCategory}
            onChangeNote={changeNote}
          />
        </CollapseWrapper>
      </Main>
    </>
  );
};

export default ProfileTransactions;
