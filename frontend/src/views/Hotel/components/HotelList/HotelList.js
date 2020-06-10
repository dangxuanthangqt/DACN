import styles from "./HotelList.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//material-ui
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

// component
import HotelItem from "../HotelItem";

import { fetchPaginationHotel } from "redux/actionCreators/hotelActionCreator";

const HotelList = ({ hotels, count }) => {
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState(paginationInitValue);

  let valueSearchChanged = "";

  useEffect(() => {
    fetchPagination();
  }, [pagination]);

  const handleSearch = () => {
    setPagination({
      ...pagination,
      valueSearch: valueSearchChanged,
    });
  };

  const handleChangeInputSearch = (event) => {
    valueSearchChanged = event.target.value;
  };

  const handleChangeIndexPagination = (event, value) => {
    setPagination({
      ...pagination,
      index: value - 1,
    });
  };

  const fetchPagination = () => {
    dispatch(fetchPaginationHotel(pagination));
  };

  return (
    <div>
      <Grid container className={styles.container_search}>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Search something!!!"
            className={styles.item_search}
            onChange={handleChangeInputSearch}
          />

          <Button
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            className={styles.item_search}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {hotels.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <HotelItem hotel={item}></HotelItem>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Pagination
            count={parseInt((count / paginationInitValue.size).toFixed(0)) + 1}
            color="primary"
            onChange={handleChangeIndexPagination}
            className={styles.pagination}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const paginationInitValue = {
  size: 8,
  index: 0,
  valueSearch: "",
  keySort: "",
};

export default HotelList;
