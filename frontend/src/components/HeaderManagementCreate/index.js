import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

//material-ui
import { Button, Grid, Typography } from "@material-ui/core";

import styles from "./HeaderManagementCreate.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const HeaderManagementCreate = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            Back to {title}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderManagementCreate;
