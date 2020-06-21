import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Modal,
  TextField,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/styles";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRoomRequest } from "redux/actionCreators/roomActionCreator.js";
import * as Yup from "yup";
import MySelect from "./MySelect.js";

ModalEditRoom.propTypes = {};

function ModalEditRoom(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const roomSelected = useSelector((state) => state.rooms.roomSelected);

  const { open, handleClose } = props;
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
        open={open}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card className={classes.root}>
          <CardHeader title="EDIT ROOM"></CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                id: roomSelected.id,
                floor: roomSelected.floor,
                roomTypeId: roomSelected.roomType.id,
                price: roomSelected.roomType.price,
                brand: roomSelected.brand.name,
                name: roomSelected.name,
                size: roomSelected.roomType.size,
              }}
              validationSchema={Yup.object().shape({
                floor: Yup.number()
                  .required("Floor is require")
                  .min(1, "Minimum 1.")
                  .max(
                    roomSelected.brand.floor,
                    `Maximum ${roomSelected.brand.floor}`
                  ),
                name: Yup.number()
                  .required("Name of room is Required")
                  .min(100, "Minimum 100")
                  .max(
                    roomSelected.brand.floor * 100 + 99,
                    `Maximum ${roomSelected.brand.floor * 100 + 99}`
                  ),
                roomTypeId: Yup.number().required("Require !"),
              })}
              onSubmit={(values) => {
                let temp = {
                  id: values.id,
                  floor: values.floor,
                  name: values.name,
                  roomType: {
                    id: values.roomTypeId,
                  },
                  brand: {
                    id: roomSelected.brand.id,
                  },
                };
                dispatch(editRoomRequest(temp));

                handleClose();
              }}
            >
              {(props) => {
                return (
                  <Form className={classes.fields}>
                    <Field
                      name="roomTypeId"
                      component={MySelect}
                      label="Roomtype"
                      placeholder="Select roomtype"
                    ></Field>
                    <TextField
                      size="small"
                      fullWidth
                      name="brand"
                      label="Brand"
                      value={props.values.brand}
                      disabled
                      variant="outlined"
                    ></TextField>
                    <TextField
                      error={
                        props.errors.floor && props.touched.floor ? true : false
                      }
                      helperText={
                        props.errors.floor && props.touched.floor
                          ? props.errors.floor
                          : null
                      }
                      type="number"
                      size="small"
                      fullWidth
                      name="floor"
                      label="Floor"
                      placeholder="Which floor?"
                      value={props.values.floor}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                    ></TextField>

                    <TextField
                      error={
                        props.errors.name && props.touched.name ? true : false
                      }
                      helperText={
                        props.errors.name && props.touched.name
                          ? props.errors.name
                          : null
                      }
                      size="small"
                      fullWidth
                      name="name"
                      label="Name"
                      placeholder="Name of room"
                      value={props.values.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                    ></TextField>
                    <TextField
                      size="small"
                      fullWidth
                      name="price"
                      label="Price"
                      placeholder="Price of room"
                      value={props.values.price}
                      disabled
                      variant="outlined"
                    ></TextField>
                    <TextField
                      size="small"
                      fullWidth
                      name="size"
                      label="Size"
                      value={props.values.size}
                      disabled
                      variant="outlined"
                    ></TextField>
                    <div style={{ display: "flex" }}>
                      <Button
                        color="primary"
                        fullWidth
                        disabled={!props.isValid || props.isSubmitting}
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button
                        fullWidth
                        onClick={handleClose}
                        variant="contained"
                        className={classes.btnCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "30%",
  },
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  btnCancel: {
    width: "100%",
    backgroundColor: theme.palette.error.light,
  },
}));
export default ModalEditRoom;
