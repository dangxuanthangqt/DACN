import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";

import Action from "./components/Actions/Action";
import {
  fetchListHotelOptionRequest,
  resetStateOnRedux,
} from "redux/actionCreators/roomActionCreator";
import ModalAddRoom from "./components/ModalAddRoom";
import ListRoomOfBrand from "./components/ListRoomOfBrand/ListRoomOfBrand";
import { makeStyles } from "@material-ui/styles";

RoomManagement.propTypes = {};

function RoomManagement(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listHotel = useSelector((state) => state.rooms.listHotel);
  useEffect(() => {
    dispatch(fetchListHotelOptionRequest());
    return () => {
      dispatch(resetStateOnRedux());
      dispatch({
        type:"RESET_ROOM_STORE"
    })
    };
  }, [dispatch]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container className={classes.root}>
      <Header></Header>
      <Action handleOpen={handleOpen} listHotel={listHotel}></Action>
      <ModalAddRoom open={open} handleClose={handleClose}></ModalAddRoom>
      
      <ListRoomOfBrand></ListRoomOfBrand>
    </Container>
  );
}
const useStyles= makeStyles(theme=>({
  root:{
    height: "100%"
  }
}))

export default RoomManagement;
