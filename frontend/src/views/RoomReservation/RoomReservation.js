import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import "react-calendar-timeline/lib/Timeline.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchListHotelOptionRequest } from "redux/actionCreators/roomActionCreator";
import { getAllReservationRequest } from "redux/actionCreators/roomReservationActionCreator";
import Action from "./components/Action/Actions";
import CustomTimeLine from "./components/CustomTimeline";
import Header from "./components/Header";
RoomReservation.propTypes = {};

function RoomReservation(props) {
  const listHotel = useSelector((state) => state.rooms.listHotel);
  const brandSelected = useSelector((state) => state.rooms.brandSelected1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (brandSelected) {
      dispatch(getAllReservationRequest(brandSelected.id));
    }
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
