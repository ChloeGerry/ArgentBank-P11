import { useState } from 'react';
import { CollapseItem, CollapseWrapper, CollapseText, Icon } from './collapse';

const Collapse = ({
  padding,
  flexDirection,
  margin,
  date,
  description,
  amount,
  balance,
  transactionType,
  transactionTypeName,
  transactionCategory,
  transactionCategoryName,
  transactionNote,
  transactionNoteText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CollapseWrapper>
        <CollapseItem>
          <CollapseText>{date}</CollapseText>
          <CollapseText>{description}</CollapseText>
        </CollapseItem>
        <CollapseItem>
          <CollapseText>{amount}</CollapseText>
          <CollapseText>{balance}</CollapseText>
          <Icon
            className="fa-solid fa-chevron-down"
            onClick={() => setIsOpen(!isOpen)}
          ></Icon>
        </CollapseItem>
      </CollapseWrapper>
      {isOpen && (
        <CollapseWrapper padding={padding} flexDirection={flexDirection}>
          <CollapseItem>
            <CollapseText>{transactionType}</CollapseText>
            <CollapseText>{transactionTypeName}</CollapseText>
          </CollapseItem>
          <CollapseItem>
            <CollapseText>{transactionCategory}</CollapseText>
            <CollapseText>
              {transactionCategoryName}
              <Icon className="fa-solid fa-pencil" margin={margin}></Icon>
            </CollapseText>
          </CollapseItem>
          <CollapseItem>
            <CollapseText>{transactionNote}</CollapseText>
            <CollapseText>
              {transactionNoteText}
              <Icon className="fa-solid fa-pencil" margin={margin}></Icon>
            </CollapseText>
          </CollapseItem>
        </CollapseWrapper>
      )}
    </>
  );
};

export default Collapse;
