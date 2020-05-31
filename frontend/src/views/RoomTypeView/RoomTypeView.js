import RoomTypeList from 'components/RoomTypeList';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListRoomTypeRequest } from 'redux/actionCreators/roomTypeActionCreator';
import Header from './component/Header';
import { Container } from '@material-ui/core';
import ModalAddRoomType from './component/ModalAddRoomType';

RoomTypeView.propTypes = {
    
};

function RoomTypeView(props) {
    const rooms = useSelector(state=> state.roomType.listRoomType);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListRoomTypeRequest())
      
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
       <Container style={{display:"flex", justifyContent:"center"}}>
           <div>
           <Header handleOpen={handleOpen}></Header>
           <ModalAddRoomType open={open} handleClose={handleClose}></ModalAddRoomType>
           <RoomTypeList rooms={rooms} >

           </RoomTypeList>
           </div>
           
       </Container>
       
    );
}

export default RoomTypeView;