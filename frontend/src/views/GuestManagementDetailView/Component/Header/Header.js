import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
const Header = (props) => {
  const { email } = props;
  const history = useHistory();
  const handleBack=()=>{
    history.goBack();
  }
  return (
    <div style={{display:"flex", justifyContent: 'space-between'}}>
      <div>
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        GUEST DETAILS
      </Typography>
      <Typography
      variant="h4"
      style={{color:"gray"}}
      >
       Email: {email}
      </Typography>
      </div>
      <div>
        <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleBack}
        >
          <ArrowBackIosIcon></ArrowBackIosIcon>
          Back to guest management
        </Button>
      </div>
    </div>
  );
};


Header.propTypes = {
  guest: PropTypes.object
};


export default Header;
