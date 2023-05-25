import Header from '../../components/layouts/Header';
import { Main } from './error';

const Error = () => {
  return (
    <>
      <Header login="false" />
      <Main>Cette page n'existe pas...</Main>
    </>
  );
};

export default Error;
