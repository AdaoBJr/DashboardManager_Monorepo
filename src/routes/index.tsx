import { Routes, Route } from 'react-router-dom';
import { CreateAccount, SignIn } from 'lib/ui';

const Router = () => (
  <Routes>
    <Route path="/" element={<p>Rota Inicial</p>} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/login" element={<SignIn />} />
  </Routes>
);

export default Router;
