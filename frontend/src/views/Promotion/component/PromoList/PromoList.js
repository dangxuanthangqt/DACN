import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import PromoItem from "../PromoItem";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useSelector } from "react-redux";

PromoList.propTypes = {};

function PromoList(props) {
  const { promoList } = props;
  const length =12;
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const count = useSelector((state) => state.promotions.length);
  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {
        
       promoList.slice((page-1)*length, page*length).map((promoItem, index) => {
        
          return <PromoItem key={index} promoItem={promoItem}></PromoItem>;
        })}
      </Grid>
      <div>
        <Pagination
          className={classes.pagination}
          onChange={(a, page) => {
            setPage(page);
          }}
          count={Math.ceil(count / length)}
          color="primary"
        ></Pagination>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    marginTop: "1rem",
  },
  pagination: {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  promoList: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "1rem",
  },
}));
export default PromoList;
