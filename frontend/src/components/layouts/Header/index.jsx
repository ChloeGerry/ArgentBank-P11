import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavigationLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;

const NavigationLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const NavigationItemWrapper = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  color: #00bc77;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ login }) => {
  return (
    <header>
      <Navigation>
        <NavigationLogoWrapper to="/">
          <h1>
            <NavigationLogo
              src="/assets/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
          </h1>
        </NavigationLogoWrapper>
        <div>
          {login === 'false' ? (
            <NavigationItemWrapper to="/login">
              <Icon /> Sign In
            </NavigationItemWrapper>
          ) : (
            <>
              <NavigationItemWrapper to="/users/:id">
                <Icon /> Tony
              </NavigationItemWrapper>
              <NavigationItemWrapper to="/">
                <Icon /> Sign Out
              </NavigationItemWrapper>
            </>
          )}
        </div>
      </Navigation>
    </header>
  );
};

export default Header;
