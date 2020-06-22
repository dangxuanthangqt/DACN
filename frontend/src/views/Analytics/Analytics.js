import React, { useEffect, useState, Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Container,
} from "@material-ui/core";

import Chart from "./components/Chart/Chart";
import Header from "./components/Header";
import Action from "views/RoomReservation/components/Action/Actions";
import { useSelector, useDispatch } from "react-redux";
import { getAllReservationRequest } from "redux/actionCreators/roomReservationActionCreator";
import { fetchListHotelOptionRequest } from "redux/actionCreators/roomActionCreator";
import Warning from "views/RoomManagement/components/ListRoomOfBrand/Warning";
import { toastifyError } from "helper/Toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    height: "100%",
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  chart: {
    padding: theme.spacing(4, 2, 0, 2),
    height: 400,
  },
}));

const Analytics = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const listHotel = useSelector((state) => state.rooms.listHotel);
  const brandSelected = useSelector((state) => state.rooms.brandSelected1);
  const dataReservationInYear = useSelector(
    (state) => state.roomReservation.dataReservationInYear
  );
  const listReservation = useSelector(
    (state) => state.roomReservation.listReservation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (brandSelected) {
      dispatch(getAllReservationRequest(brandSelected.id));
    }
    dispatch(fetchListHotelOptionRequest());
    return () => {
      //  dispatch(resetStateOnRedux());
      // dispatch(resetListRoomReservationOnRedux());
      dispatch({
          type:"RESET_ROOM_STORE"
      })
      dispatch({
          type:"RESET_ROOM_RESERVATION_STORE"
      })
    };
  }, [dispatch]);

  const data = {
    thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
    // lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
  };
  

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Container>
      <Header></Header>
      <Action listHotel={listHotel}></Action>
      {listReservation.length === 0 ? (
        <Fragment>
          <Warning></Warning>
        </Fragment>
      ) : (
        <Card {...rest} className={clsx(classes.root, className)}>
          <CardHeader title="Reservation booked in this year" />
          <Divider />
          <CardContent className={classes.content}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Chart
                  className={classes.chart}
                  data={{
                    thisYear: [...dataReservationInYear],
                  }}
                  labels={labels}
                />
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

Analytics.propTypes = {
  className: PropTypes.string,
};

export default Analytics;
