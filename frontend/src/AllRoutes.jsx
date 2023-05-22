import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import User from './Pages/User';
import UserTransactions from './Pages/User/Transaction';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/users/:id/transactions" element={<UserTransactions />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
