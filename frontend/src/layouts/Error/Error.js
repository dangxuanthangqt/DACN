import React, { Suspense } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Error = props => {
  

  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Suspense fallback={<LinearProgress />}>
        {props.children}
      </Suspense>
    </main>
  );
};

Error.propTypes = {
  route: PropTypes.object
};

export default Error;
