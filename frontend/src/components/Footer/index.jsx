import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Copyright 2020 Argent Bank</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
