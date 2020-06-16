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
import { fetchPaginationHotel } from "redux/actionCreators/hotelActionCreator";
import { paginationInitValue } from "./components/HotelList/HotelList";
const Hotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPaginationHotel(paginationInitValue));
  }, [dispatch]);

  const hotels = useSelector((state) => {
    return state.hotels.listHotel;
  });

  const count = useSelector((state) => {
    return state.hotels.count;
  });

  return (
    <div>
      <Container className={styles.container_header}>
        <div>
          <HeaderManagementList
            title={ValueRoutes.Hotel.name}
            path={ValueRoutes.Hotel.path}
            api={ValueRoutes.Hotel.api}
          />
          <HotelList hotels={hotels} count={count} />
        </div>
      </Container>
    </div>
  );
};

export default Hotel;
