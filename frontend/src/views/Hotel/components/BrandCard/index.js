import { useDispatch } from "react-redux";
import React, { useState } from "react";
import clsx from "clsx";
import { useRouteMatch } from "react-router-dom";

import { deleteBrand } from "redux/actionCreators/brandActionCreator";
import { DialogDelete } from "components/Dialog";
import BrandEdit from "../BrandEdit";
//material ui
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./BrandCard.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const BrandCard = ({ brand, handleDeleteBrand }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [statusDialogDelete, setStatusDialogDelete] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClickDeleteBrand = () => {
    setStatusDialogDelete(true);
  };

  const onDeleteBrand = () => {
    dispatch(deleteBrand(brand.id));
    handleDeleteBrand(brand.id);
    setStatusDialogDelete(false);
  };

  const handleClickEdit = () => {
    setOpenDialog(true);
  };

  const handleCloseBrandEdit = () => {
    setOpenDialog(false);
  };

  const handleSubmitBrand = (data) => {
    handleDeleteBrand(brand.id);
  };

  return (
    <Card className={classes.root}>
      <DialogDelete
        status={statusDialogDelete}
        subtitle={"Data of brand will delete!"}
        title={"Brand"}
        handleDelete={onDeleteBrand}
        handleCancel={() => {
          setStatusDialogDelete(false);
        }}
      />
      <BrandEdit
        open={openDialog}
        onClose={handleCloseBrandEdit}
        handleSubmitBrand={handleSubmitBrand}
        data={brand}
      />

      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={brand.name.toUpperCase()}
        subheader={brand.address}
      />
      <CardMedia
        className={styles.img_brand}
        image={brand.imgLink}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {brand.desciption
            ? brand.desciption.substring(0, 69)
            : "No Description"}{" "}
          ...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClickEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={onClickDeleteBrand}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Description:
            <Typography paragraph>
              {brand.desciption ? brand.desciption : "No Description"} ...
            </Typography>
          </Typography>

          <Typography variant="h6" gutterBottom>
            Floor:
            <Typography paragraph>{brand.floor}</Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BrandCard;
