import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import BrandCard from "../BrandCard";
import BrandFromDialog from "../BrandFormDialog";
import styles from "./BrandList.module.css";

const BrandList = ({ brands }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [brandsState, setBrandsState] = useState(brands);

  const handleClickNewBrand = () => {
    setOpenDialog(true);
  };

  const handleCloseBrandFormDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitBrand = (data) => {
    let brandsTemp = Array.from(brandsState);
    brandsTemp.push(data);
    setBrandsState(brandsTemp);
  };

  const handleDeleteBrand = (id) => {
    let brandsTemp = Array.from(brandsState);
    brandsTemp.splice(findIndexFollowID(brandsTemp, id), 1);
    setBrandsState(brandsTemp);
  };

  const findIndexFollowID = (brandsTemp, id) => {
    for (let i = 0; i < brandsTemp.length; ++i) {
      if (brandsTemp[i].id === id) {
        return i;
      }
    }
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={styles.title_brands}
          >
            Brands
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AddIcon />}
            className={styles.btn_new_brand}
            onClick={handleClickNewBrand}
          >
            New Brand
          </Button>
          {brandsState && brandsState.length ? (
            <Grid container spacing={3}>
              {brandsState.map((item, index) => {
                return (
                  <Grid item xs={4} key={index}>
                    <BrandCard
                      brand={item}
                      handleDeleteBrand={handleDeleteBrand}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div className={styles.title_not_found}>Brand not found...</div>
          )}
        </CardContent>
      </Card>
      <BrandFromDialog
        open={openDialog}
        onClose={handleCloseBrandFormDialog}
        handleSubmitBrand={handleSubmitBrand}
      />
    </div>
  );
};

export default BrandList;
