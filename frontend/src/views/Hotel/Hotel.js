// material-ui
import { Container } from "@material-ui/core";

import styles from "./Hotel.module.css";

import React, { useEffect } from "react";

import { ValueRoutes } from "../../common/Constant";

//import components
import HeaderManagementList from "../../components/HeaderManagementList";
import HotelList from "./components/HotelList";

//import redux fuc
import { useDispatch, useSelector } from "react-redux";
import { fetchListHotelRequest } from "redux/actionCreators/hotelActionCreator";

const Hotel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListHotelRequest());
  }, [dispatch]);

  const hotels = useSelector((state) => {
    return state.hotels.listHotel;
  });

  return (
    <div>
      <Container className={styles.container_header}>
        <div>
          <HeaderManagementList
            title={ValueRoutes.Hotel.name}
            path={ValueRoutes.Hotel.path}
          />
          <HotelList hotels={hotels} />
        </div>
      </Container>
    </div>
  );
};

export default Hotel;
