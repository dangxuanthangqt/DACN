import styles from "./HotelList.module.css";
import React, { useEffect } from "react";

//material-ui
import Grid from "@material-ui/core/Grid";

// component
import HotelItem from "../HotelItem";

const HotelList = ({ hotels }) => {
  return (
    <Grid container spacing={2}>
      {hotels.map((item) => {
        return (
          <Grid item xs={3} key={item.id}>
            <HotelItem hotel={item}></HotelItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HotelList;
