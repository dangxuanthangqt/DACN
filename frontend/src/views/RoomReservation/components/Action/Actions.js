import { Grid, Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import BrandSelection from "./BrandSelection";
import HotelSelection from "./HotelSelection";

Action.propTypes = {};

function Action(props) {
  const { listHotel, handleOpen } = props;
  const [brandSelected, setBrandSelected] = useState(null);
  const [listBrand, setlistBrand] = useState([]);

  const handleChangeListBrand = (hotelSelected) => {
    const hotel = listHotel.find((item) => item.id === hotelSelected.value);
    setlistBrand(hotel.brands);
    setBrandSelected(null);
  };
  const handleChangeBrandSelected = (brandSelected) => {
    setBrandSelected(brandSelected);
  };
 
  //console.log(listBrand, brandSelected);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <HotelSelection
            handleChangeListBrand={handleChangeListBrand}
            listHotel={listHotel}
          ></HotelSelection>
        </Grid>
        <Grid item xs={3}>
          <BrandSelection
            value={brandSelected}
            handleChangeBrandSelected={handleChangeBrandSelected}
            listBrand={listBrand}
          ></BrandSelection>
        </Grid>
      </Grid>
    </div>
  );
}

export default Action;
