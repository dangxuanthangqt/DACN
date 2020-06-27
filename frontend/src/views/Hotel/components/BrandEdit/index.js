import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import RUG from "react-upload-gallery";

import { editBrand } from "redux/actionCreators/brandActionCreator";
import { storage } from "utils/firebase";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import CancelIcon from "@material-ui/icons/Cancel";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";

import styles from "./BrandEdit.module.css";

const BrandEdit = (props) => {
  const { open, onClose, handleSubmitBrand, data } = props;

  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [images, setImages] = useState([]);
  const [statusPaperImageLoaded, setStatusPaperImageLoaded] = useState(true);

  const dataBrandDetail = useSelector((state) => {
    return state.brand.brandDetail;
  });

  useEffect(() => {
    if (dataBrandDetail) {
      handleSubmitBrand(dataBrandDetail);
    }
  }, [dataBrandDetail]);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (data) => {
    if (!statusPaperImageLoaded) {
      data.imgLink = await uploadImagesToFirebase();
    }
    data.hotel = {
      id: match.params.id,
    };
    dispatch(editBrand(data));
  };

  const handleChangeImages = (images) => {
    if (images) {
      const fileImages = images.map((item) => {
        return item.file;
      });
      setImages(fileImages);
    }
  };

  const uploadImagesToFirebase = async () => {
    dispatch({ type: "SHOW_LOADING" });

    let result = [];

    for (let i = 0; i < images.length; ++i) {
      const snapshot = await storage
        .ref("hotel")
        .child(images[i].name)
        .put(images[i], {
          contentType: images[i].type,
        });

      const url = await snapshot.ref.getDownloadURL();

      result.push({ name: url });
      dispatch({ type: "HIDE_LOADING" });
    }

    return result[0].name;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={styles.dialog_container}
    >
      <DialogTitle id="form-dialog-title">New Brand</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  className={styles.tf_item}
                  onChange={props.handleChange}
                  helperText={props.errors.name ? props.errors.name : null}
                  value={props.values.name}
                  error={Boolean(props.errors.name)}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  label="Address"
                  type="text"
                  fullWidth
                  className={styles.tf_item}
                  onChange={props.handleChange}
                  helperText={
                    props.errors.address ? props.errors.address : null
                  }
                  value={props.values.address}
                  error={Boolean(props.errors.address)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="floor"
                  label="Floor"
                  type="number"
                  min="0"
                  max="200"
                  fullWidth
                  className={styles.tf_item}
                  onChange={props.handleChange}
                  helperText={props.errors.floor ? props.errors.floor : null}
                  value={props.values.floor}
                  error={Boolean(props.errors.floor)}
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="desciption"
                  label="Description"
                  type="text"
                  fullWidth
                  className={styles.tf_item}
                  onChange={props.handleChange}
                  helperText={
                    props.errors.desciption ? props.errors.desciption : null
                  }
                  value={props.values.desciption}
                  error={Boolean(props.errors.desciption)}
                />
                <div className={styles.tf_item}>
                  <RUG
                    style={{
                      display: statusPaperImageLoaded ? "none" : "block",
                    }}
                    rules={{
                      limit: 1,
                    }}
                    accept={["jpg", "jpeg", "png"]}
                    onWarning={(type, rules) => {
                      switch (type) {
                        case "accept":
                          console.log("limit <= ", rules.limit);
                        case "limit":
                          console.log("limit <= ", rules.limit);
                        default:
                      }
                    }}
                    action=""
                    onChange={handleChangeImages}
                  />

                  <Paper
                    elevation={3}
                    style={{
                      display: statusPaperImageLoaded ? "block" : "none",
                    }}
                  >
                    <Badge
                      className={styles.badge_img_loaded}
                      badgeContent={<CancelIcon color="error" />}
                      onClick={() => {
                        setStatusPaperImageLoaded(false);
                      }}
                    />
                    <Typography variant="body2" display="block" gutterBottom>
                      Image loaded
                    </Typography>
                    <div className={styles.card_img}>
                      <img src={data.imgLink} className={styles.img_loaded} />
                    </div>
                  </Paper>
                </div>

                <div className={styles.DialogActionsCustom}>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name")
    .required("Name is required!")
    .min(2, "Name too short!")
    .max(50, "Name to long!"),
  desciption: Yup.string("Enter a description")
    .required("Description is required")
    .min(2, "Description too shoot!")
    .max(255, "description too long!"),
  floor: Yup.number("Choose a floor")
    .required("Floor is required!")
    .min(1, "Limit min of floor is 1")
    .max(200, "Limit max of floor is 2"),
  address: Yup.string("Enter Address")
    .required("Address is required")
    .min(2, "Address to short!")
    .max(100, "Address to long!"),
});

export default BrandEdit;
