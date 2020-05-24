import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

ImgCover.propTypes = {
    
};

function ImgCover(props) {

    const {url}= props;
    console.log(url);
    return (
        <div
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
            display: 'flex',
            justifyContent:'center',
            minHeight:'60vh',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
        }}
        >
            {props.children}
        </div>
    );
}

export default ImgCover;