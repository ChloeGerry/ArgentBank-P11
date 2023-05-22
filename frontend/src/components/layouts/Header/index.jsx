import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import LinkNavigation from '../Link';
import { Navigation, NavigationLogo } from './header';

const Header = ({ login }) => {
  return (
    <header>
      <Navigation>
        <Link to="/">
          <h1>
            <NavigationLogo
              src="/assets/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
          </h1>
        </Link>
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
