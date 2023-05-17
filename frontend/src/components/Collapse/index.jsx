import styled from 'styled-components';
import { useState } from 'react';

const CollapseWrapper = styled.article`
  background-color: #00bc77;
  display: flex;
  justify-content: space-between;
`;

const CollapseItem = styled.div`
  padding: 8px 24px;
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: baseline;
`;

const CollapseText = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Icon = styled.i`
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Collapse = ({ date, description, amount, balance, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);
  return isOpen ? (
    <CollapseWrapper>
      <CollapseItem>
        <CollapseText>{date}</CollapseText>
        <CollapseText>{description}</CollapseText>
        <CollapseText>{text}</CollapseText>
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
  ) : (
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
  );
};

export default Collapse;
