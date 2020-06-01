import { Button, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root:{ marginTop : theme.spacing(2),
    marginBottom: theme.spacing(2)

}
}));

const Header = props => {
 
  const history = useHistory();
  const classes = useStyles();
  const handleBack =()=>{
    history.goBack();
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
          <Button
          size="small"
          onClick={handleBack}
          variant="contained"
          color="primary"
          >
          <ArrowBackIosIcon></ArrowBackIosIcon>
            Back to Roomtype management
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
