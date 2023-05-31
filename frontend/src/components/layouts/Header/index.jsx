import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import LinkNavigation from '../Link';
import { Navigation, NavigationLogo } from './header';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/user.action';

const Header = ({ login }) => {
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

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
              color="#2c3e50"
              textDecoration="underline"
            >
              <Icon /> Sign In
            </LinkNavigation>
          ) : (
            <>
              <LinkNavigation
                to={`/profile/:${profile.data.id}`}
                margin="0.5rem"
                color="#42b983"
                textDecoration="underline"
              >
                <Icon /> {profile.data && profile.data.firstName}
              </LinkNavigation>

              <LinkNavigation
                to="/"
                onClick={() => dispatch(logout())}
                margin="0.5rem"
                color="#42b983"
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
