import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

//material-ui
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
//components
import HeaderManagementCreate from "components/HeaderManagementCreate";

//fire base
import { storage } from "utils/firebase";

// reducers
import { addNewHotel } from "redux/actionCreators/hotelActionCreator";

import history from "helper/history";

import { privateRoutes } from "routes/routeConfigs";
import styles from "./HotelCreate.module.css";

const HotelCreate = () => {
  // state
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const values = { name: "", description: "", images: [] };

  const onHandleDropImages = (acceptedFiles, props) => {};

  const submit = (data) => {
    // covert data images
    data.images = data.images.map((item) => {
      return {
        name: item,
      };
    });
    dispatch(addNewHotel(data));
  };

  const handelCancel = () => {
    const { path } = privateRoutes[0].subroutes.find(
      (item) => item.key === "hotel"
    );

    history.push(path);
  };
  return (
    <Container className={styles.container_header}>
      <div>
        <HeaderManagementCreate title="title"></HeaderManagementCreate>
        <Paper>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            className={styles.title}
          >
            Add Hotel
          </Typography>
          <Divider></Divider>
          <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {(props) => {
              return (
                <form onSubmit={props.handleSubmit}>
                  <Paper className={styles.paper_form} elevation={3}>
                    <Grid container spacing={0}>
                      <Grid item xs={12} className={styles.gird_item}>
                        <TextField
                          size="small"
                          id="outlined-basic"
                          className={styles.text_filed_item}
                          name="name"
                          error={Boolean(props.errors.name)}
                          helperText={
                            props.errors.name ? props.errors.name : null
                          }
                          label="Name"
                          onChange={props.handleChange}
                          value={props.values.name}
                        />
                      </Grid>
                      <Grid item xs={12} className={styles.gird_item}>
                        <TextField
                          multiline
                          label="Description"
                          className={styles.text_filed_item}
                          error={props.errors.description ? true : false}
                          helperText={
                            props.errors.description
                              ? props.errors.description
                              : null
                          }
                          name="description"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          placeholder="Description"
                          value={props.values.description}
                          rowsMax="10"
                          rows="10"
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} className={styles.gird_item}>
                        <Dropzone
                          className={styles.drop_img}
                          accept="image/*"
                          onDrop={(acceptedFiles) => {
                            dispatch({ type: "SHOW_LOADING" });
                            storage
                              .ref("hotel")
                              .child(acceptedFiles[0].name)
                              .put(acceptedFiles[0], {
                                contentType: acceptedFiles[0].type,
                              })
                              .then((snapshot) => {
                                snapshot.ref.getDownloadURL().then((url) => {
                                  dispatch({ type: "HIDE_LOADING" });
                                  props.setFieldValue(
                                    "images",
                                    props.values.images.concat(url)
                                  );
                                  setImages([...images, url]);
                                });
                              });
                          }}
                        >
                          {({ isDragActive, isDragReject }) => {
                            if (isDragActive) {
                              return "This file is authorized";
                            }

                            if (isDragReject) {
                              return "This file is not authorized";
                            }

                            if (images && images.length != 0) {
                              return images.map((item, index) => (
                                <img
                                  src={item}
                                  key={index}
                                  className={styles.img_upload}
                                />
                              ));
                            }
                            return <p>Up load image in here!!!</p>;
                          }}
                        </Dropzone>
                        {props.errors.images ? (
                          <small style={{ color: "red", float: "left" }}>
                            {props.errors.images}
                          </small>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6} className={styles.gird_btn}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<SaveIcon />}
                          className={styles.btn_form}
                          disabled={!props.isValid || !props.dirty}
                          type="submit"
                        >
                          Save
                        </Button>
                      </Grid>
                      <Grid item xs={6} className={styles.gird_btn}>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<CancelIcon />}
                          onClick={handelCancel}
                          className={styles.btn_form}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </form>
              );
            }}
          </Formik>
        </Paper>
      </div>
    </Container>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name").required("Name is required"),
  description: Yup.string("Enter a description").required(
    "Description is required"
  ),
  images: Yup.array().required("Images is required !"),
});

export default HotelCreate;
