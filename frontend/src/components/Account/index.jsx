import {
  AccountAmount,
  AccountWrapper,
  AccountContentWrapper,
  AccountTitle,
  AccountAmountDescription,
  TransactionButtonWrapper,
} from './account';

const Account = ({ title, amount, description, button }) => {
  return (
    <AccountWrapper>
      <AccountContentWrapper>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>{description}</AccountAmountDescription>
      </AccountContentWrapper>
      <TransactionButtonWrapper>{button}</TransactionButtonWrapper>
    </AccountWrapper>
  );
};

export default Account;
