import { Routes, Route } from 'react-router-dom';
import { Register, SignIn } from 'lib/ui';

const Router = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<SignIn />} />
  </Routes>
);

export default Router;
