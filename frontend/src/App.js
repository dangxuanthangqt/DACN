import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'
import { Router } from 'react-router-dom';
import './assets/scss/index.scss';
import history from './helper/history'
import configStore from './redux/configStore/configStore';
import theme from './theme';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';



const store = configStore();
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
              <ToastContainer></ToastContainer>
             <Routes></Routes>
             {/* <Dashboard></Dashboard> */}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
