import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
`;

const BankDescriptionWrapper = styled.div`
  background-image: url('../img/bank-tree.jpeg');
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

const HomePageSectionTitle = styled.h2`
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

const BankDesciptionSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
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

const FeaturesItemWrapper = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeaturesIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeaturesItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Home = () => {
  return (
    <Main>
      <BankDescriptionWrapper>
        <BankDescriptionContent>
          <HomePageSectionTitle>Promoted Content</HomePageSectionTitle>
          <BankDesciptionSubtitle>No fees.</BankDesciptionSubtitle>
          <BankDesciptionSubtitle>No minimum deposit.</BankDesciptionSubtitle>
          <BankDesciptionSubtitle>High interest rates.</BankDesciptionSubtitle>
          <BankDescriptionText>
            Open a savings account with Argent Bank today !
          </BankDescriptionText>
        </BankDescriptionContent>
      </BankDescriptionWrapper>
      <FeaturesWrapper>
        <HomePageSectionTitle>Features</HomePageSectionTitle>
        <FeaturesItemWrapper>
          <FeaturesIcon src="/assets/icon-chat.png" alt="Chat Icon" />
          <FeaturesItemTitle>You are our #1 priority</FeaturesItemTitle>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </FeaturesItemWrapper>
        <FeaturesItemWrapper>
          <FeaturesIcon src="/assets/icon-money.png" alt="Chat Icon" />
          <FeaturesItemTitle>More savings means higher rates</FeaturesItemTitle>
          <p>
            The more you save with us, the higher your interest rate will be !
          </p>
        </FeaturesItemWrapper>
        <FeaturesItemWrapper>
          <FeaturesIcon src="/assets/icon-security.png" alt="Chat Icon" />
          <FeaturesItemTitle>Security you can trust</FeaturesItemTitle>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </FeaturesItemWrapper>
      </FeaturesWrapper>
    </Main>
  );
};

export default Home;
