import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Card } from "@material-ui/core";
import Header from "./components/Header";
import CustomTimeLine from "./components/CustomTimeline";
import { makeStyles } from "@material-ui/styles";
import "react-calendar-timeline/lib/Timeline.css";
import {
  fetchListHotelOptionRequest,
  resetStateOnRedux,
} from "redux/actionCreators/roomActionCreator";
import { useSelector, useDispatch } from "react-redux";
import Action from "./components/Action/Actions";
import { resetListRoomReservationOnRedux } from "redux/actionCreators/roomReservationActionCreator";
RoomReservation.propTypes = {};

function RoomReservation(props) {
  const listHotel = useSelector((state) => state.rooms.listHotel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListHotelOptionRequest());
    return () => {
    //  dispatch(resetStateOnRedux());
     // dispatch(resetListRoomReservationOnRedux());
    };
  }, [dispatch]);
  const classes = useStyles();
  return (
    <Container>
      <Header></Header>
      <Action listHotel={listHotel}></Action>
      <CustomTimeLine className={classes.CustomTimeline}></CustomTimeLine>
    </Container>
  );
}
const useStyles = makeStyles((theme) => ({
  CustomTimeline: {
    marginTop: "1em",
  },
}));
export default RoomReservation;
