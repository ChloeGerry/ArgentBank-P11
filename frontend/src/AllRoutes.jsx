import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import User from './Pages/User';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
