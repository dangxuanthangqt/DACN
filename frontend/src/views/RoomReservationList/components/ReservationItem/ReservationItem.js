import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toastifyError } from "helper/Toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "wrap",
    },
    "&:last-child": {
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    maxWidth: "100%",
    width: 240,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      flexBasis: "100%",
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
    },
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%",
    },
  },
}));

const ReservationItem = (props) => {
  const { handleOpen,handleOpen1, reservationItem, className, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClickAccept = () => {
    if (reservationItem.status === "PENDING") {
      dispatch({
        type: "SET_DATA_MODAL_RESEVATION_DETAIL",
        payload: reservationItem,
      });
      handleOpen();
    } else {
      toastifyError("STATUS RESERVATION IS NOT PENDING !");
    }
  };
  const handleClickPayment = () => {
    if(reservationItem.status === "COMPLETED"){
      dispatch({
        type: "SET_DATA_MODAL_PAYMENT_DETAIL",
        payload: reservationItem.reservation,
      });
      handleOpen1();
    }else {
      toastifyError("STATUS RESERVATION IS NOT ACCEPTED !");
    }
    
  };
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{
        backgroundColor:
          reservationItem.status === "PENDING"
            ? "#ffe57f"
            : reservationItem.status === "COMPLETED"
            ? "#81c784"
            : "#ff5722",
      }}
    >
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar alt="Author" className={classes.avatar}>
            {reservationItem.firstName}
          </Avatar>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
            >
              {reservationItem.firstName} {reservationItem.lastName}
            </Link>
            <Typography variant="body2">
              email{" "}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6"
              >
                {reservationItem.email}
              </Link>
            </Typography>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{reservationItem.room.name} </Typography>
          <Typography variant="body2">Room</Typography>
        </div>

        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(new Date(reservationItem.startDate)).format("DD MMMM YYYY")}
          </Typography>
          <Typography variant="body2">Start day</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(new Date(reservationItem.endDate)).format("DD MMMM YYYY")}
          </Typography>
          <Typography variant="body2">End day</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">{reservationItem.status}</Typography>
          <Typography variant="body2">Reservation status</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={handleClickAccept}
            color="primary"
            size="small"
            variant="contained"
          >
            Accept
          </Button>
          <Typography variant="body2">Action</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            onClick={handleClickPayment}
            color="primary"
            size="small"
            variant="contained"
          >
            {reservationItem.reservation.status}
          </Button>
          <Typography variant="body2">Payment status</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

ReservationItem.propTypes = {
  className: PropTypes.string,
};

export default ReservationItem;
