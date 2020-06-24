import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./component/Header";
import ModalAddPromo from "./component/ModalAddPromo/ModalAddPromo";
import { useDispatch, useSelector } from "react-redux";
import { fetchListPromoRequest } from "redux/actionCreators/promoActionCreator";
import PromoList from "./component/PromoList";
import Filter from './component/Filter';
Promotion.propTypes = {};


function Promotion(props) {
    const [open, setOpen] = useState(false)
    const handleOpen =()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const dispatch= useDispatch();
    const promoList =useSelector(state=>state.promotions.listPromos)
   

  return (
    <Container>
      <Header handleOpen={handleOpen}></Header>
      <Filter></Filter>
      <ModalAddPromo open={open} handleClose={handleClose}></ModalAddPromo>
      <PromoList promoList={promoList} ></PromoList>
    </Container>
  );
}

export default Promotion;
