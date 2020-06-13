import React, { useEffect } from "react";

// material-ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { privateRoutes } from "routes/routeConfigs";
import history from "helper/history";

import styles from "./HotelItem.module.css";

const HotelItem = ({ hotel }) => {
  const handleClickToHotelDetail = () => {
    const { path } = privateRoutes[0].subroutes.find(
      (item) => item.key === "hotel_detail"
    );

    const url = path.replace(":id", `${hotel.id}`);
    history.push(url);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClickToHotelDetail}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={hotel.images[0].name}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={styles.card_content}
          >
            {hotel.name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hotel.description.substring(0, 69)} ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelItem;
