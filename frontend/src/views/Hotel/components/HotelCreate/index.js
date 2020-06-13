import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";

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

  const submit = async (data) => {
    data.images = await uploadImagesToFirebase();

    dispatch(addNewHotel(data));
  };

  const handelCancel = () => {
    const { path } = privateRoutes[0].subroutes.find(
      (item) => item.key === "hotel"
    );

    history.push(path);
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

    return result;
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
                        <RUG
                          action="null"
                          rules={{
                            limit: 5,
                          }}
                          accept={["jpg", "jpeg", "png"]}
                          onWarning={(type, rules) => {
                            switch (type) {
                              case "accept":
                                console.log(`Only ${rules.accept.join(", ")}`);

                              case "limit":
                                console.log("limit <= ", rules.limit);

                              case "size":
                                console.log("max size <= ", rules.size);

                              case "minWidth":
                              case "minHeight":
                                console.log(
                                  "Dimensions > ",
                                  `${rules.width.min}x${rules.height.min}`
                                );

                              case "maxWidth":
                              case "maxHeight":
                                console.log(
                                  "Dimensions < ",
                                  `${rules.width.max}x${rules.height.max}`
                                );

                              default:
                            }
                          }}
                          onChange={handleChangeImages}
                        />
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
  // images: Yup.array().required("Images is required !"),
});

export default HotelCreate;
