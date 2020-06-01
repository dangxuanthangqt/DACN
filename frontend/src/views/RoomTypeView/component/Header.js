import { Button, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';
import history from 'helper/history';
import PropTypes from 'prop-types';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)

  }
}));

const Header = props => {


  const classes = useStyles();
  const handleClick = () => {
    history.push('/management/room-types/add')
  }
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
            ROOM TYPES
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={handleClick}
            color="primary"
            variant="contained"
          >
            <AddIcon></AddIcon>
            ADD ROOMTYPE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
