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
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addPromoRequest,
  editPromoRequest,
} from "redux/actionCreators/promoActionCreator";
import * as Yup from "yup";

ModalEditPromo.propTypes = {};

function ModalEditPromo(props) {
  const { promoItem } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
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
          <CardHeader title="EDIT PROMOTION"></CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                description: promoItem.description,
                dollarDiscount: promoItem.dollarDiscount,
                startDate: new Date(promoItem.startDate),
                endDate: new Date(promoItem.endDate),
                roomType: promoItem.roomType.name,
                percentDiscount: promoItem.percentDiscount,
                promoCode: promoItem.promoCode,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                let temp = {
                  description: values.description,
                  dollarDiscount: values.dollarDiscount,
                  id: promoItem.id,
                  roomType: {
                    id: promoItem.roomType.id,
                  },
                  startDate: values.startDate,
                  endDate: values.endDate,
                  percentDiscount: values.percentDiscount,
                  promoCode: values.promoCode,
                };
                dispatch(editPromoRequest(temp));
                handleClose();
              }}
            >
              {(props) => {
                return (
                  <Form className={classes.fields}>
                    <TextField
                      size="small"
                      fullWidth
                      name="RoomType"
                      label="RoomType"
                      value={props.values.roomType}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      disabled
                      variant="outlined"
                    ></TextField>
                    <TextField
                      error={
                        props.errors.description && props.touched.description
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.description && props.touched.description
                          ? props.errors.description
                          : null
                      }
                      size="small"
                      fullWidth
                      name="description"
                      label="Description"
                      value={props.values.description}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      rowsMax="2"
                      rows="2"
                      variant="outlined"
                    ></TextField>

                    <TextField
                      error={
                        props.errors.dollarDiscount &&
                        props.touched.dollarDiscount
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.dollarDiscount &&
                        props.touched.dollarDiscount
                          ? props.errors.dollarDiscount
                          : null
                      }
                      type="number"
                      size="small"
                      fullWidth
                      name="dollarDiscount"
                      label="dollarDiscount"
                      value={props.values.dollarDiscount}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                    ></TextField>
                    <TextField
                      error={
                        props.errors.percentDiscount &&
                        props.touched.percentDiscount
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.percentDiscount &&
                        props.touched.percentDiscount
                          ? props.errors.percentDiscount
                          : null
                      }
                      type="number"
                      size="small"
                      fullWidth
                      name="percentDiscount"
                      label="percentDiscount"
                      value={props.values.percentDiscount}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                    ></TextField>
                    <TextField
                      error={
                        props.errors.promoCode && props.touched.promoCode
                          ? true
                          : false
                      }
                      helperText={
                        props.errors.promoCode && props.touched.promoCode
                          ? props.errors.promoCode
                          : null
                      }
                      size="small"
                      fullWidth
                      name="promoCode"
                      label="promoCode"
                      value={props.values.promoCode}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      variant="outlined"
                    ></TextField>

                    <KeyboardDatePicker
                      fullWidth
                      size="small"
                      autoOk
                      name="startDate"
                      variant="inline"
                      inputVariant="outlined"
                      label="Start Day"
                      format="MM/dd/yyyy"
                      value={props.values.startDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => {
                        props.setFieldValue("startDate", date);
                      }}
                    />
                    <KeyboardDatePicker
                      fullWidth
                      size="small"
                      autoOk
                      value="endDate"
                      variant="inline"
                      inputVariant="outlined"
                      label="End Day"
                      format="MM/dd/yyyy"
                      value={props.values.endDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => {
                        props.setFieldValue("endDate", date);
                      }}
                    />
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

const validationSchema = Yup.object().shape({
  description: Yup.string().required("Description is require"),
  dollarDiscount: Yup.number()
    .required("DollarDiscount is Required")
    .min(0, "Minimum 0"),
  percentDiscount: Yup.number()
    .required("percentDiscount is required")
    .min(0, "Min 0% ")
    .max(100, "Max 100% "),
  promoCode: Yup.string().required("PromoCode is requied !"),
});
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
export default ModalEditPromo;
