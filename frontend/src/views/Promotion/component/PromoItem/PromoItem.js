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
import React from "react";

PromoItem.propTypes = {};

function PromoItem(props) {
  const { promoItem } = props;
  const classes = useStyles();
  //console.log(promoItem);
  return (
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
          <IconButton size="small" className={classes.btnDelete}>
            <HighlightOffOutlinedIcon></HighlightOffOutlinedIcon>
          </IconButton>
          <IconButton size="small" className={classes.btnEdit}>
            <ListOutlinedIcon></ListOutlinedIcon>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
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
