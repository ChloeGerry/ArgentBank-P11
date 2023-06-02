import Header from '../../components/layouts/Header';
import { Main, LinkWrapper } from './error';
import LinkNavigation from '../../components/layouts/Link';

const Error = () => {
  return (
    <>
      <Header login="false" />
      <Main>
        Cette page n'existe pas...
        <LinkWrapper>
          <LinkNavigation to="/" color="#2c3e50">
            Cliquez ici pour retourner sur la page d'accueil
          </LinkNavigation>
        </LinkWrapper>
      </Main>
    </>
  );
};

export default Error;
