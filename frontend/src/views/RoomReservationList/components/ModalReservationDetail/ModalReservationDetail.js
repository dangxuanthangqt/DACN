import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusCompletedRequest,
  changeStatusCancelledRequest,
} from "redux/actionCreators/roomReservationActionCreator";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    width: "30%",
  },
  field: {
    marginBottom: "1em",
  },
}));

export default function ModalReservationDetail(props) {
  const classes = useStyles();
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const brandSelected = useSelector((state) => state.rooms.brandSelected);
  const dataModalReservation = useSelector(
    (state) => state.roomReservation.dataModalReservation
  );
  const handleAccept = () => {
    dispatch(
      changeStatusCompletedRequest({
        brandId: brandSelected.id,
        id: dataModalReservation.id,
        status: "COMPLETED",
      })
    );
    handleClose();
  };
  const handleReject = () => {
    dispatch(
      changeStatusCancelledRequest({
        brandId: brandSelected.id,
        id: dataModalReservation.id,
        status: "CANCELLED",
      })
    );
    handleClose();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card className={classes.card}>
          <CardHeader title="Room Reservation Detail"></CardHeader>
          <Divider></Divider>
          <CardContent>
            <form>
              <TextField
                disabled
                className={classes.field}
                fullWidth
                label="Full name"
                defaultValue={`${dataModalReservation.firstName} ${dataModalReservation.lastName}`}
                variant="outlined"
                size="small"
              />
              <TextField
                disabled
                fullWidth
                className={classes.field}
                label="Email"
                defaultValue={dataModalReservation.email}
                variant="outlined"
                size="small"
              />
              <KeyboardDatePicker
                disabled
                className={classes.field}
                fullWidth
                disableToolbar
                variant="dialog"
                format="MM/dd/yyyy"
                label="Start date"
                value={new Date(dataModalReservation.startDate)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                disabled
                fullWidth
                className={classes.field}
                disableToolbar
                variant="dialog"
                format="MM/dd/yyyy"
                label="End date"
                value={new Date(dataModalReservation.endDate)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </form>
          </CardContent>
          <CardActions>
            {dataModalReservation.status === "PENDING" ? (
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button
                    onClick={handleAccept}
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Accept
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={handleReject}
                    fullWidth
                    style={{ backgroundColor: "red" }}
                    variant="contained"
                  >
                    Reject
                  </Button>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
