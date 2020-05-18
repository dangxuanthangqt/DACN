import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

import { Topbar } from './components';

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    
    backgroundColor:'#c5cae9',
    paddingTop: 56,
    [theme.breakpoints.up('xs')]: {
      paddingTop: 64
    }
  }
}));

const Auth = props => {
  

  const classes = useStyles();

  return (
    <Fragment>
      <Topbar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {/* {renderRoutes(route.routes)} */}
          {/* <Login></Login> */}
          {/* <Register></Register> */}
          {
            props.children
          }
          
        </Suspense>
      </main>
    </Fragment>
  );
};

Auth.propTypes = {
  route: PropTypes.object
};

export default Auth;
