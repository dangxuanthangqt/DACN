import RoomTypeList from 'components/RoomTypeList';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListRoomTypeRequest } from 'redux/actionCreators/roomTypeActionCreator';

RoomTypeView.propTypes = {
    
};

function RoomTypeView(props) {
    const rooms = useSelector(state=> state.roomType.listRoomType);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListRoomTypeRequest())
      
    }, []);
    return (
       <Fragment>
           <RoomTypeList rooms={rooms} >

           </RoomTypeList>
       </Fragment>
       
    );
}

export default RoomTypeView;