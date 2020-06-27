import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material ui
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import history from "helper/history";
import ImageCover from "views/RoomTypeDetailView/ImgCover";
import {
  fetchDetailHotelRequest,
  deleteHotel,
} from "redux/actionCreators/hotelActionCreator";
import { DialogDelete } from "components/Dialog";
import { ValueRoutes } from "common/Constant";
import BrandList from "../BrandList";

import styles from "./HotelDetail.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const HotelDetail = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const [statusDialogDelete, setStatusDialogDelete] = useState(false);
  const {
    Hotel: { path },
  } = ValueRoutes;

  const hotel = useSelector((state) => {
    return state.hotels.hotelDetail;
  });

  useEffect(() => {
    dispatch(fetchDetailHotelRequest(match.params.id));
  }, [dispatch]);

  const handleGoback = () => {
    history.goBack();
  };

  const clickDeleteHotel = () => {
    setStatusDialogDelete(true);
  };

  const handleDeleteHotel = () => {
    dispatch(deleteHotel(hotel.id));
  };

  const clickEditHotel = () => {
    history.push(`${path}/edit/${match.params.id}`);
  };

  if (hotel) {
    return (
      <div>
        {/* Dialog */}
        <DialogDelete
          status={statusDialogDelete}
          subtitle={"Data of hotel will delete all!!!"}
          title={"HOTEL"}
          handleDelete={handleDeleteHotel}
          handleCancel={() => {
            setStatusDialogDelete(false);
          }}
        />
        <Container className={(styles.container_header, classes.root)}>
          <Grid container>
            <Grid item xs={12}>
              <ImageCover
                url={
                  "https://firebasestorage.googleapis.com/v0/b/thang1-265415.appspot.com/o/room-type%2Froom-2.jpeg?alt=media&token=92dc2007-8359-4a97-8992-e316bda8f4af"
                }
              >
                <div className={styles.card_title_content}>
                  <h1>{hotel.name}</h1>
                  <div className={styles.line_title}></div>
                  <button onClick={handleGoback} className="btn-primary">
                    Back to rooms
                  </button>
                </div>
              </ImageCover>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            className={styles.container_list_image_item}
          >
            {hotel.images.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <img className={styles.img_item} src={item.name}></img>
                </Grid>
              );
            })}
          </Grid>

          <Grid container className={styles.container_item}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2">
                    Description
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    {hotel.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container className={styles.container_item}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h3" component="h2">
                    Actions
                  </Typography>
                  <Grid container>
                    <Grid item xs={6} className={styles.item_btn}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={styles.btn_action}
                        startIcon={<EditIcon />}
                        onClick={clickEditHotel}
                      >
                        Edit
                      </Button>
                    </Grid>

                    <Grid item xs={6} className={styles.item_btn}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={styles.btn_action}
                        startIcon={<DeleteIcon />}
                        onClick={clickDeleteHotel}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container className={styles.container_item}>
            <Grid item xs={12}>
              <BrandList brands={hotel.brands} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default HotelDetail;
