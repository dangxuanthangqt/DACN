import React from "react";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import history from "helper/history";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Header = (props) => {
  const { className, ...rest } = props;
  const match = useRouteMatch();
  const classes = useStyles();
  const handleGoback=()=>{
    history.goBack();
  }
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            {`Reservation ${match.params.status}`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button 
          onClick={handleGoback}
          variant="contained" fullWidth color="primary">
            Go back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
