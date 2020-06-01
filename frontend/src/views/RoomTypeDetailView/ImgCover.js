import React from 'react';

ImgCover.propTypes = {
    
};

function ImgCover(props) {

    const {url}= props;
    //console.log(url);
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