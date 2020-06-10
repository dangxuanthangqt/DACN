import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import Header from "./component/Header";
import ModalAddPromo from "./component/ModalAddPromo/ModalAddPromo";

Promotion.propTypes = {};

function Promotion(props) {
    const [open, setOpen] = useState(false)
    const handleOpen =()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <Container>
      <Header handleOpen={handleOpen}></Header>
      <ModalAddPromo open={open} handleClose={handleClose}></ModalAddPromo>
    </Container>
  );
}

export default Promotion;
