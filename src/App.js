import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import AppRouter from './app-router';
import { Provider as AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  );
}

export default App;
