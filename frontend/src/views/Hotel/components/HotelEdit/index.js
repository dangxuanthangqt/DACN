import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "react-upload-gallery/dist/style.css";
//material-ui
import { Container } from "@material-ui/core";
//components
import HeaderManagementCreate from "components/HeaderManagementCreate";
import HotelForm from "../HotelForm";
import { ValueRoutes } from "common/Constant";
//fire base
import { storage } from "utils/firebase";

// reducers
import {
  editHotel,
  fetchDetailHotelRequest,
} from "redux/actionCreators/hotelActionCreator";

import styles from "./HotelEdit.module.css";

const HotelCreate = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  // state
  const [images, setImages] = useState([]);

  const hotel = useSelector((state) => {
    return state.hotels.hotelDetail;
  });

  useEffect(() => {
    dispatch(fetchDetailHotelRequest(match.params.id));
  }, [dispatch]);

  const handleSubmit = async (data) => {
    data.images = await uploadImagesToFirebase();
    data.id = match.params.id;

    dispatch(editHotel(data));
  };

  const handleChangeImages = (images) => {
    if (images && images instanceof Array) {
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
      <div className={styles.test}>
        <HeaderManagementCreate
          title={ValueRoutes.Hotel.name}
          path={ValueRoutes.Hotel.path}
        ></HeaderManagementCreate>
        <HotelForm
          handleSubmit={handleSubmit}
          handleChangeImages={handleChangeImages}
          title={"Edit Hotel"}
          data={hotel}
        />
      </div>
    </Container>
  );
};

export default HotelCreate;
