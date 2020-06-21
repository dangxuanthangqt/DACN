import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

//material-ui
import { Button, Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useHistory } from "react-router-dom";

import styles from "./HeaderManagementCreate.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const HeaderManagementCreate = ({ title, path }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>

          <Button
            size="small"
            onClick={handleBack}
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
          >
            Back to {title} detail management
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderManagementCreate;
