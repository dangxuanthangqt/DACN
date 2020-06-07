// material-ui
import { Button, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import history from "helper/history";

import styles from "./HeaderManagementList.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const HeaderManagementList = ({ title, path }) => {
  const handleAddNewItem = () => {
    history.push(`${path}/add`);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Management
          </Typography>
          <Typography component="h1" variant="h3">
            {title}S
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={handleAddNewItem}
          >
            <AddIcon></AddIcon>
            ADD {title}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderManagementList;
