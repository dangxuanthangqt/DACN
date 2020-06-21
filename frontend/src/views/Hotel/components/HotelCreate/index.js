import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
import { addNewHotel } from "redux/actionCreators/hotelActionCreator";

import styles from "./HotelCreate.module.css";

const HotelCreate = () => {
  // state
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    data.images = await uploadImagesToFirebase();

    dispatch(addNewHotel(data));
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
      <div className={styles.test}>
        <HeaderManagementCreate
          title={ValueRoutes.Hotel.name}
          path={ValueRoutes.Hotel.path}
        ></HeaderManagementCreate>
        <HotelForm
          handleSubmit={handleSubmit}
          handleChangeImages={handleChangeImages}
          title={"Add Hotel"}
          isCreate={true}
          data={{
            name: "",
            description: "",
            images: [],
          }}
        />
      </div>
    </Container>
  );
};

export default HotelCreate;
