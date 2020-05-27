import React from 'react';
import PropTypes from 'prop-types';
import GuestInfor from './GuestInfor';


const Summary = (props) => {
    const {guestInfor, handleOpenEdit, handleCloseEdit, open} = props;
    return (
        <div>
            <GuestInfor handleOpenEdit={handleOpenEdit} 
            handleCloseEdit={handleCloseEdit}
            open={open}
            guestInfor={guestInfor}></GuestInfor>
        </div>
    );
};


Summary.propTypes = {

};


export default Summary;
