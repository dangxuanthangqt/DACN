import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchListPromoRequest, fetchListActivePromo } from "redux/actionCreators/promoActionCreator";

Filter.propTypes = {};

function Filter(props) {
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
      if(value === 1){
        dispatch(fetchListPromoRequest());
      }else if( value ===2){
        dispatch(fetchListActivePromo());
      }
    
     
  }, [value]);
  return (
      <Grid style={{width: "24.5%"}}>
    <FormControl fullWidth size="small" variant="filled">
      <InputLabel id="demo-simple-select-filled-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={1}>All Promotion</MenuItem>
        <MenuItem value={2}>Active Promotion</MenuItem>
      </Select>
    </FormControl>
    </Grid>
  );
}

export default Filter;
