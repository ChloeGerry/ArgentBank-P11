import styled from 'styled-components';
import Description from '../../components/Description';
import Feature from '../../components/Feature';
import Header from '../../components/layouts/Header';
import Title from '../../components/Title';

const Main = styled.main`
  flex: 1;
`;

const BankDescriptionWrapper = styled.div`
  background-image: url('/assets/bank-tree.jpeg');
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const BankDescriptionContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const BankDescriptionText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const Home = () => {
  return (
    <>
      <Header login="false" />
      <Main>
        <BankDescriptionWrapper>
          <BankDescriptionContent>
            <Title title="Promoted Content" />
            <Description text="No fees." />
            <Description text="No minimum deposit." />
            <Description text="High interest rates." />
            <BankDescriptionText>
              Open a savings account with Argent Bank today !
            </BankDescriptionText>
          </BankDescriptionContent>
        </BankDescriptionWrapper>
        <FeaturesWrapper>
          <Title title="Features" />
          <Feature
            icon="/assets/icon-chat.png"
            alt="Chat Icon"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            icon="/assets/icon-money.png"
            alt="Money Icon"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be !"
          />
          <Feature
            icon="/assets/icon-security.png"
            alt="Security Icon"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </FeaturesWrapper>
      </Main>
    </>
  );
};

export default Home;
