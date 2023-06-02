import { useState } from 'react';
import {
  CollapseItem,
  CollapseWrapper,
  CollapseText,
  Icon,
  CollapseInput,
  CollapseLabel,
  FormWrapper,
  Form,
} from './collapse';

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
  onChangeCategory,
  onChangeNote,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransactionCategoryOpen, setTransactionCategoryOpen] =
    useState(false);
  const [isTransactionNoteOpen, setTransactionNoteOpen] = useState(false);
  const allCategories = ['Food', 'Rent', 'Hobbies'];

  const changeCatagoryValue = (newValue) => {
    onChangeCategory(newValue);
  };

  const changeNoteValue = (newValue) => {
    onChangeNote(newValue);
  };

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
            <FormWrapper>
              {isTransactionCategoryOpen ? (
                <>
                  <Form>
                    {allCategories.map((category) => {
                      return (
                        <div key={category}>
                          <input
                            onClick={() => changeCatagoryValue(category)}
                            id={category}
                            type="radio"
                            value={category}
                          />
                          <CollapseLabel htmlFor={category}>
                            {category}
                          </CollapseLabel>
                        </div>
                      );
                    })}
                  </Form>
                  <Icon
                    className="fa-solid fa-check"
                    margin={margin}
                    onClick={() =>
                      setTransactionCategoryOpen(!isTransactionCategoryOpen)
                    }
                  />
                </>
              ) : (
                <CollapseText>
                  {transactionCategoryName}
                  <Icon
                    className="fa-solid fa-pencil"
                    margin={margin}
                    onClick={() =>
                      setTransactionCategoryOpen(!isTransactionCategoryOpen)
                    }
                  />
                </CollapseText>
              )}
            </FormWrapper>
          </CollapseItem>
          <CollapseItem>
            <CollapseText>{transactionNote}</CollapseText>
            <div>
              {isTransactionNoteOpen ? (
                <>
                  <CollapseInput
                    onChange={(e) => changeNoteValue(e.target.value)}
                    type="text"
                  />
                  <Icon
                    className="fa-solid fa-check"
                    margin={margin}
                    onClick={() =>
                      setTransactionNoteOpen(!isTransactionNoteOpen)
                    }
                  />
                </>
              ) : (
                <CollapseText>
                  {transactionNoteText}
                  <Icon
                    className="fa-solid fa-pencil"
                    margin={margin}
                    onClick={() =>
                      setTransactionNoteOpen(!isTransactionNoteOpen)
                    }
                  />
                </CollapseText>
              )}
            </div>
          </CollapseItem>
        </CollapseWrapper>
      )}
    </>
  );
};

export default Collapse;
