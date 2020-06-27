import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import RUG, { DragArea } from "react-upload-gallery";
//material ui
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import Badge from "@material-ui/core/Badge";

import history from "helper/history";
// reducers
import { fetchDetailHotelRequest } from "redux/actionCreators/hotelActionCreator";

import styles from "./HotelForm.module.css";

const HotelFrom = ({
  handleSubmit,
  handleChangeImages,
  title,
  isCreate,
  data,
}) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [statusPaperImageLoaded, setStatusPaperImageLoaded] = useState(
    !isCreate
  );
  const [validateImage, setValidateImage] = useState(true);

  const handelCancel = () => {
    history.goBack();
  };

  if (!isCreate && !data) {
    return "loading...";
  }

  return (
    <Paper>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        className={styles.title}
      >
        {title}
      </Typography>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
                      variant="outlined"
                      className={styles.text_filed_item}
                      name="name"
                      error={Boolean(props.errors.name)}
                      helperText={props.errors.name ? props.errors.name : null}
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
                      style={{
                        display: statusPaperImageLoaded ? "none" : "block",
                      }}
                      action=""
                      rules={{
                        limit: 4,
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
                            setValidateImage(true);
                        }
                      }}
                      onChange={(handleChangeImages)}
                      name="images"
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
                        style={{ display: isCreate ? "none" : "block" }}
                        onClick={() => {
                          setStatusPaperImageLoaded(false);
                        }}
                      />

                      <Typography variant="body2" display="block">
                        Image loaded
                      </Typography>
                      {data.images.map((item, index) => {
                        return (
                          <div className={styles.card_img} key={index}>
                            <img
                              src={item.name}
                              className={styles.img_loaded}
                            />
                          </div>
                        );
                      })}
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6} className={styles.gird_btn}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      className={styles.btn_form}
                      disabled={
                        !props.isValid || !props.dirty || !validateImage
                      }
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
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name").required("Name is required"),
  description: Yup.string("Enter a description").required(
    "Description is required"
  ),
});

export default HotelFrom;
