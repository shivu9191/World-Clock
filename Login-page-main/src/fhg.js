import { ConfigProvider } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from '../src/pages/HomeView';
import LoginView from '../src/pages/LoginView';
import RouteChangeListener from './components/state/dashboard/RoueChangeListener';

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1c5335',
      },
    }}
  >
    <Router>
    <RouteChangeListener />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/login' element={<LoginView />} />
      </Routes>
    </Router>
  </ConfigProvider>
);

export default App;
