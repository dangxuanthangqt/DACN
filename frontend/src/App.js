import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';


import DateFnsUtils from '@date-io/date-fns';
import { Router } from 'react-router-dom';
import './assets/scss/index.scss';
import history from './helper/history'
import configStore from './redux/configStore/configStore';
import theme from './theme';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import GlobalLoading from 'components/GlobalLoading/GlobalLoading';
import 'date-fns';


const store = configStore();
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
          <Router history={history}>
              <ToastContainer></ToastContainer>
              <GlobalLoading></GlobalLoading>
             <Routes></Routes>
             {/* <Dashboard></Dashboard> */}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
