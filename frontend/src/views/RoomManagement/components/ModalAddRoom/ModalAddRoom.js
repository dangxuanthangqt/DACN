import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Modal,
  TextField,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import MySelect from "./MySelect.js";
import { addRoomRequest } from "redux/actionCreators/roomActionCreator.js";
ModalAddRoom.propTypes = {};

function ModalAddRoom(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const brandSelected = useSelector((state) => state.rooms.brandSelected);
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
          <CardHeader title="ADD ROOM"></CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValue}
              validationSchema={Yup.object().shape({
                floor: Yup.number()
                  .required("floor is require")
                  .min(1, "Minimum 1.")
                  .max(brandSelected.floor, `Maximum ${brandSelected.floor}`),
                name: Yup.number()
                  .required("name is Required")
                  .min(100, "Minimum 100")
                  .max(brandSelected.floor*100+99, `Maximum ${brandSelected.floor*100+99}`),
                roomTypeId: Yup.number().required("Require !"),
              })}
              onSubmit={(values) => {
                let temp={
                    floor: values.floor,
                    name: values.name,
                    roomType : {
                        id: values.roomTypeId
                    },
                    brand:{
                        id: brandSelected.id
                    }
                }
                dispatch(addRoomRequest(temp));

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

                    

                    <div style={{ display: "flex", marginTop:"5em" }}>
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
const initialValue = {
  floor: "",
  id: "",
  name: "",
  roomTypeId: "",
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "30%",
    height:"70%"
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnCancel: {
    width: "100%",
    backgroundColor: theme.palette.error.light,
  },
}));
export default ModalAddRoom;
