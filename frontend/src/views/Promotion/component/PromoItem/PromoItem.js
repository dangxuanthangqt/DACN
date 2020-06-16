import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { makeStyles } from "@material-ui/styles";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePromoRequest } from "redux/actionCreators/promoActionCreator";
import ModalEditPromo from "../ModalEditPromo";

PromoItem.propTypes = {};

function PromoItem(props) {
  const { promoItem } = props;
  const classes = useStyles();
  //console.log(promoItem);
  const [open, setOpen]= useState(false);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  const dispatch=useDispatch();
  const handleDeletePromo=(id)=>{
    if(window.confirm("Do you want to delete this promotion 🙄🙄🙄?")){
        dispatch(deletePromoRequest(id));
    }
  }
  return (
    <Fragment>
    <ModalEditPromo open={open} handleClose={handleClose} promoItem ={promoItem}></ModalEditPromo>
    <Grid item xs={3}>
      <Card className={classes.root}> 
        <CardMedia
          className={classes.media}
          image={promoItem.roomType.thumbnail}
          title="Contemplative Reptile"
        ></CardMedia>
        <CardContent className={classes.content}>
          <Typography color="textPrimary" gutterBottom variant="h1">
            Discount: {promoItem.percentDiscount} %
          </Typography>
          <Typography className={classes.textColor} gutterBottom variant="h6">
            Start Day: {promoItem.startDate}
          </Typography>
          <Typography className={classes.textColor} gutterBottom variant="h6">
            End Day: {promoItem.endDate}
          </Typography>
          <Typography className={classes.textColor} gutterBottom variant="h6">
            Room Type: {promoItem.roomType.name}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
          onClick={()=>{handleDeletePromo(promoItem.id)}}
          
          size="small" className={classes.btnDelete}>
            <HighlightOffOutlinedIcon></HighlightOffOutlinedIcon>
          </IconButton>
          <IconButton onClick={handleOpen} size="small" className={classes.btnEdit}>
            <ListOutlinedIcon></ListOutlinedIcon>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
    </Fragment>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  media: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  content: {
    position: "relative",
    backgroundColor: "transparent",
  },
  action: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  btnDelete: {
    backgroundColor: theme.palette.error.dark,
  },
  btnEdit: {
    backgroundColor: theme.palette.primary.dark,
  },
  textColor: {
    color: theme.palette.white,
  },
}));
export default PromoItem;
