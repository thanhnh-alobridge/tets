import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DEFAULT_PATH, FORGOT_PASSWORD, REGISTER_COMPLETED_PATH, REGISTER_PATH } from '@constants/path';
import RegisterCompletedPage from '@pages/register-completed';
import ForgotPassWord from '@pages/forgot-password';

import { Login } from './pages/login';
import RegisterPage from './pages/register';
import TopPage from './pages/top';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<TopPage />} path={DEFAULT_PATH} />
        <Route element={<RegisterPage />} path={REGISTER_PATH} />
        <Route element={<RegisterCompletedPage />} path={REGISTER_COMPLETED_PATH} />
        <Route element={<ForgotPassWord />} path={FORGOT_PASSWORD} />
        <Route element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
