import React, { useState } from "react";
import PropTypes from "prop-types";
import ReservationItem from "../ReservationItem";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import ModalReservationDetail from "../ModalReservationDetail";
import ModalPaymentDetail from "../ModalPaymentDetail";

ReservationList.propTypes = {};

function ReservationList(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const length = 10;
  let listReservation = useSelector(
    (state) => state.roomReservation.listReservation
  );
  // listReservation=listReservation.sort((a, b) => {
  //   if (a.room.name > b.room.name) {
  //     return 1;
  //   } else if (a.room.name < b.room.name) return -1;
  //   return 0;
  // })
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <ModalReservationDetail
        open={open}
        handleClose={handleClose}
      ></ModalReservationDetail>
      <ModalPaymentDetail
        open={open1}
        handleClose={handleClose1}
      ></ModalPaymentDetail>
      <Grid container spacing={1}>
        {listReservation
          .slice((page - 1) * length, page * length)
          .map((item, index) => {
            return (
              <ReservationItem
                handleOpen={handleOpen}
                handleOpen1={handleOpen1}
                key={index}
                reservationItem={item}
              ></ReservationItem>
            );
          })}
      </Grid>

      <div>
        <Pagination
          className={classes.pagination}
          onChange={(a, page) => {
            setPage(page);
          }}
          count={Math.ceil(listReservation.length / length)}
          color="primary"
        ></Pagination>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  pagination: {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
export default ReservationList;
