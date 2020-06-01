import React from 'react';
import PropTypes from 'prop-types';

ImageView.propTypes = {

};

function ImageView(props) {
    const { url } = props;
    return (
        <img src={url}
            alt="DXT"
            className="img-thumbnail mt-2"
            height={200}
            width={200} />
    );
}

export default ImageView;