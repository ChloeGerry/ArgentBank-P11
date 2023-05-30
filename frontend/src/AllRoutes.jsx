import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProfileTransactions from './Pages/Profile/Transaction';
import SignUp from './Pages/Signup';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route
        path="/profile/:id/transactions/:account"
        element={<ProfileTransactions />}
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
