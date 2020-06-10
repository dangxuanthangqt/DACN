import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Modal, Card, CardHeader, CardContent, TextField } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { Formik, Form } from "formik";
import * as Yup from "yup";
ModalAddPromo.propTypes = {};

function ModalAddPromo(props) {
  const classes = useStyles();
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
        <Card>
          <CardHeader title="ADD PROMOTION"></CardHeader>
          <CardContent>
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
            >
              {(props) => {
                return <Form>
                    <TextField
                    multiline
                    name="description"
                    value={props.values.description}
                    onChange={props.handleChange}
                    onBlur ={props.handleBlur}
                    rowsMax="2"
                    rows=""
                    variant="outlined"
                    >
                        
                    </TextField>
                </Form>;
              }}
            </Formik>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}
const initialValue = {
  description: "",
  dollarDiscount: 50,
  startDate: new Date(),
  endDate: new Date(),
  roomTypeId: 0,
  percentDiscount: 0,
  promoCode: "",
};
const validationSchema = Yup.object().shape({});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default ModalAddPromo;
