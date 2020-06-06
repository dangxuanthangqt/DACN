import React, { useEffect } from "react";

// material-ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import BorderColorIcon from "@material-ui/icons/BorderColor";

import styles from "./HotelItem.module.css";

const HotelItem = ({ hotel }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={hotel.images[0].name}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hotel.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <BorderColorIcon color="primary" />
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelItem;
