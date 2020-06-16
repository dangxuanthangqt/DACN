import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { getAccessToken } from "helper/localStorage";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white,
  },
  barChartIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: "100%",
    maxHeight: 400,
  },
}));

const Warning = (props) => {
  const { className, ...rest } = props;
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState({
    sub: "khanh@gmail.com",
    scopes: "ROLE_ADMIN,ROLE_USER",
    first_name: "khanh",
    last_name: "nguyen",
    birth_day: 1590537600000,
    iat: 1590587146,
    exp: 1593179146,
  });
  useEffect(() => {
    let token = getAccessToken();
    if (token) {
      setUser(jwt_decode(token));
    }
  }, []);
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography component="h1" gutterBottom variant="h3">
            Hi, {user.first_name.toUpperCase()} {user.last_name.toUpperCase()} 
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Please select a hotel and brand to get started 😎😎😎
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item md={6}>
            <img
              alt="Cover"
              className={classes.image}
              src="/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

Warning.propTypes = {
  className: PropTypes.string,
};

export default Warning;
