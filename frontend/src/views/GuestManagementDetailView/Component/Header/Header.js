import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';


const Header = (props) => {
    const {guest} = props;
    return (
        <div>
            <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
        GUEST DETAILS
      </Typography>
            <Typography
            component="h1"
            
            variant="h3"
            >
               Dang xuan thang
            </Typography>
        </div>
    );
};


Header.propTypes = {
    guest : PropTypes.object
};


export default Header;
