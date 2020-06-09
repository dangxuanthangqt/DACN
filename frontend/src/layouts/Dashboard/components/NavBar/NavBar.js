import {
  Avatar,
  Divider,
  Drawer,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { getAccessToken } from "helper/localStorage";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Navigation } from "../../../../components";
//import useRouter from 'utils/useRouter';
import navigationConfig from "./navigationConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflowY: "auto",
  },
  content: {
    padding: theme.spacing(2),
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}));

const NavBar = (props) => {
  const {
    onCloseNavBar,
    openMobile,
    onMobileClose,
    className,
    ...rest
  } = props;

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
  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={
            "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/68501562_2215015038620325_5125752814454177792_o.jpg?_nc_cat=108&_nc_sid=84a396&_nc_ohc=loXGP8XapPAAX9QWYq_&_nc_ht=scontent.fdad3-3.fna&oh=6d8504a81a89238352fb938e06c274a6&oe=5EF5C047"
          }
          to="/profile/1/timeline"
        />
        <Typography className={classes.name} variant="h6">
          {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
        </Typography>
        <Typography variant="body2">{user.sub}</Typography>
      </div>
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map((list) => (
          <Navigation
            onCloseNavBar={onCloseNavBar}
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden xlUp>
        <Drawer
          anchor="left"
          onClose={onCloseNavBar}
          open={openMobile}
          variant="temporary"
        >
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
