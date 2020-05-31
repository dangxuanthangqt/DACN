import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import history from 'helper/history';
const useStyles = makeStyles((theme) => ({
  root:{ marginTop : theme.spacing(2),
    marginBottom: theme.spacing(2)

}
}));

const Header = props => {
 
 
  const classes = useStyles();
  const handleClick=()=>{
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
