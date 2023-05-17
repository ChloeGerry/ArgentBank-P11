import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import LinkNavigation from '../Link';

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
  /* color: #2c3e50; */
  text-decoration: none;
`;

const NavigationLogo = styled.img`
  max-width: 100%;
  width: 200px;
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
            <LinkNavigation
              to="/login"
              margin="0.5rem"
              color="#00bc77"
              textDecoration="underline"
            >
              <Icon /> Sign In
            </LinkNavigation>
          ) : (
            <>
              <LinkNavigation
                to="/users/:id"
                margin="0.5rem"
                color="#00bc77"
                textDecoration="underline"
              >
                <Icon /> Tony
              </LinkNavigation>
              <LinkNavigation
                to="/"
                margin="0.5rem"
                color="#00bc77"
                textDecoration="underline"
              >
                <Icon /> Sign Out
              </LinkNavigation>
            </>
          )}
        </div>
      </Navigation>
    </header>
  );
};

export default Header;
