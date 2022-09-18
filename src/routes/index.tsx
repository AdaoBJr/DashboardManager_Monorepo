import { Routes, Route } from 'react-router-dom';
import { CreateAccount, SignIn } from 'lib/ui';
import { DocsUpload } from '@dash/gestao-nfs';

const Router = () => (
  <Routes>
    <Route path="/" element={<p>Rota Inicial</p>} />
    <Route path="/create-account" element={<CreateAccount />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/upload-nfs" element={<DocsUpload />} />
  </Routes>
);

export default Router;
