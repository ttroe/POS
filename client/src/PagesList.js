import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Main from './Pages/Main';

export default function PageList() {
  return (
    <div className="PageList">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </div>
  );
}

