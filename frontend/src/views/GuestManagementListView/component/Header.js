import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root:{ marginTop : theme.spacing(2),
    marginBottom: theme.spacing(2)

}
}));

const Header = props => {
 

  const classes = useStyles();

  return (
    <div
      
      className={classes.root}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            GUESTS
          </Typography>
        </Grid>
        {/* <Grid item>
          <Button
            color="primary"
            variant="contained"
          >
            Back 
          </Button>
        </Grid> */}
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
