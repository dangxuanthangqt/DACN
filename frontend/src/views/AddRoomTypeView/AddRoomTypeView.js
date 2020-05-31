import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Header from './component/Header';
import AddRoomType from './component/AddRoomType';

const AddRoomTypeView = () => {
    return (
        <Container>
            <Header></Header>
            <AddRoomType></AddRoomType>
        </Container>
    );
};


AddRoomTypeView.propTypes = {

};


export default AddRoomTypeView;
