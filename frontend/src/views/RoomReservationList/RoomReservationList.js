import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import ReservationList from "./components/ReservationList";
import { useSelector, useDispatch } from "react-redux";
import { getAllReservationRequest } from "redux/actionCreators/roomReservationActionCreator";

RoomReservationList.propTypes = {};

function RoomReservationList(props) {
  const listReservation = useSelector(
    (state) => state.roomReservation.listReservation
  );
  const brandSelected = useSelector((state) => state.rooms.brandSelected1);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (brandSelected) dispatch(getAllReservationRequest(brandSelected.id));
    };
  }, [dispatch]);
  return (
    <Container>
      <Header></Header>
      <ReservationList listReservation={listReservation}></ReservationList>
    </Container>
  );
}

export default RoomReservationList;
