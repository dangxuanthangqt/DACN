import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";

import Action from "./components/Actions/Action";
import { fetchListHotelOptionRequest } from "redux/actionCreators/roomActionCreator";
import ModalAddRoom from "./components/ModalAddRoom";
import ListRoomOfBrand from "./components/ListRoomOfBrand/ListRoomOfBrand";

RoomManagement.propTypes = {};

function RoomManagement(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listHotel = useSelector((state) => state.rooms.listHotel);
  useEffect(() => {
    dispatch(fetchListHotelOptionRequest());
  }, []);
  const handleClose=()=>{
      setOpen(false);
  }
  const handleOpen=()=>{
      setOpen(true);
  }
  return (
    <Container>
      <Header></Header>
      <Action handleOpen={handleOpen} listHotel={listHotel}></Action>
      <ModalAddRoom open={open} handleClose={handleClose}></ModalAddRoom>
      <ListRoomOfBrand></ListRoomOfBrand>
    </Container>
  );
}

export default RoomManagement;
