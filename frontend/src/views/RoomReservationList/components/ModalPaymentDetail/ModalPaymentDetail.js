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
  changeStatusPaymentRequest,
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

export default function ModalPaymentDetail(props) {
  const classes = useStyles();
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const brandSelected = useSelector((state) => state.rooms.brandSelected);
  const dataModalPayment = useSelector(
    (state) => state.roomReservation.dataModalPayment
  );
  const handlePay = () => {
    dispatch(changeStatusPaymentRequest(dataModalPayment.id));
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
          <CardHeader title="Payment Detail"></CardHeader>
          <Divider></Divider>
          <CardContent>
            <form>
              <TextField
                disabled
                className={classes.field}
                fullWidth
                label="Full name"
                defaultValue={`${dataModalPayment.user.firstName} ${dataModalPayment.user.lastName}`}
                variant="outlined"
                size="small"
              />
              <TextField
                disabled
                fullWidth
                className={classes.field}
                label="Email"
                defaultValue={dataModalPayment.user.email}
                variant="outlined"
                size="small"
              />
              <TextField
                disabled
                fullWidth
                className={classes.field}
                label="Total before tax ($)"
                defaultValue={dataModalPayment.totalBeforeTax}
                variant="outlined"
                size="small"
              />
              <TextField
                disabled
                fullWidth
                className={classes.field}
                label="Total after tax ($)"
                defaultValue={dataModalPayment.totalAfterTax}
                variant="outlined"
                size="small"
              />
            </form>
          </CardContent>
          <CardActions>
            <Grid container spacing={3}>
              {dataModalPayment.status === "PAID" ? (
                ""
              ) : (
                <Grid item xs={6}>
                  <Button
                    onClick={handlePay}
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    Pay
                  </Button>
                </Grid>
              )}
              <Grid item xs={6}>
                <Button
                  onClick={handleClose}
                  fullWidth
                  style={{ backgroundColor: "red" }}
                  variant="contained"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
