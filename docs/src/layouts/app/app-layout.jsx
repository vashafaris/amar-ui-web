import React from 'react';
import { AppHeader, AppBody, AppFooter } from './components';
import AppProvider from '@providers/app.provider';
import './app-layout.scss';

const AppLayout = ({ children }) => {
  return (
    <div className="App">
      <AppHeader />
      <AppBody>{children}</AppBody>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
