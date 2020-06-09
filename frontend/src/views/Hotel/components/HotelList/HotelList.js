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

const HotelList = ({ hotels }) => {
  // const dispatch = useDispatch();

  // const [search, setSearch] = useState({
  //   size: 6,
  //   index: 0,
  //   valueSearch: "",
  //   keySort: "",
  // });
  // const handleSearch = () => {
  //   console.log(search);
  // };

  const [a, setA] = useState(0);

  const handleChangeInputSearch = (event) => {
    // const valueTemp = {
    //   ...search,
    //   valueSearch: event.target.value,
    // };
    // setSearch(valueTemp);
    setA(event.target.value);
    console.log(a);
  };

  // const handleChangeIndexPagination = (event, value) => {
  //   const valueTemp = {
  //     ...search,
  //     index: value,
  //   };
  //   setSearch(valueTemp);
  //   console.log(search);
  // };

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
            // onClick={handleSearch}
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
            count={10}
            color="primary"
            // onChange={handleChangeIndexPagination}
            className={styles.pagination}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HotelList;
