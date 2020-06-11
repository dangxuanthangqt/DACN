import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import PromoItem from "../PromoItem";
import { Grid } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from "react-redux";

PromoList.propTypes = {};

function PromoList(props) {
  const { promoList } = props;
  const classes = useStyles();
  const count = useSelector(state => state.promotions.length);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {promoList.map((promoItem, index) => {
          return <PromoItem key={index} promoItem={promoItem}></PromoItem>;
        })}
        
      </Grid>
        <div >
        <Pagination 
        
        onChange={(a, b) => console.log(b)}
        count={10} color="primary" ></Pagination>
        </div>
      
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height:"100%",
    marginTop: "1rem",
  },
  promoList: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "1rem",
  },
}));
export default PromoList;
