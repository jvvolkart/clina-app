import React from 'react';
import { ThemeProvider  } from '@mui/material/styles';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import theme from './styles/theme';
import Routes from './routes/index';
import history  from './services/history';
import './styles/globalStyles.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <Router history={history}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes />
        </LocalizationProvider>
          <ToastContainer />
      </Router>
    </ThemeProvider >
  );
}

export default App;
