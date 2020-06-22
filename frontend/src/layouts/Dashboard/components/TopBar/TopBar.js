/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/LockOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import history from "../../../../helper/history";
import { logoutRequest } from "../../../../redux/actionCreators/logoutActionCreator";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  search: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: "inherit",
  },
  searchInput: {
    flexGrow: 1,
    color: "inherit",
    "& input::placeholder": {
      opacity: 1,
      color: "inherit",
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
  },
  searchPopperContent: {
    marginTop: theme.spacing(1),
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900],
    },
  },
  trialIcon: {
    marginRight: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

const TopBar = (props) => {
  const { onOpenNavBar, className, ...rest } = props;

  const classes = useStyles();
  //const { history } = useRouter();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  // useEffect(() => {
  //   let mounted = true;

  //   const fetchNotifications = () => {
  //     axios.get('/api/account/notifications').then(response => {
  //       if (mounted) {
  //         setNotifications(response.data.notifications);
  //       }
  //     });
  //   };

  //   fetchNotifications();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  const handleLogout = () => {
    if (window.confirm("Do you want to log out 🙄🙄🙄?")) dispatch(logoutRequest());
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <Hidden xlUp>
          <IconButton color="inherit" onClick={onOpenNavBar}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <img alt="Logo" src="/images/logos/team5.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        {/* <Hidden smDown>
          <div
            className={classes.search}
            ref={searchRef}
          >
            <SearchIcon className={classes.searchIcon} />
            <Input
              className={classes.searchInput}
              disableUnderline
              onChange={handleSearchChange}
              placeholder="Search people &amp; places"
              value={searchValue}
            />
          </div>
 
          <Button
            className={classes.trialButton}
            onClick={handlePricingOpen}
            variant="contained"
          >
            <LockIcon className={classes.trialIcon} />
            TEST BUTTON
          </Button>
        </Hidden>
         */}
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
      </Toolbar>
      {/* <PricingModal
        onClose={handlePricingClose}
        open={pricingModalOpen}
      />
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      /> */}
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func,
};

export default TopBar;
