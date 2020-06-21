import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import Warning from "./Warning";
import {
  deleteRoomRequest,
  pushRoomItemDataToStore,
} from "redux/actionCreators/roomActionCreator";
import ModalEditRoom from "../ModalEditRoom";

ListRoomOfBrand.propTypes = {};

function ListRoomOfBrand(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const brandSelected = useSelector((state) => state.rooms.brandSelected);
  const listRoomOfBrand = useSelector((state) => state.rooms.listRoomOfBrand);
  const dispatch = useDispatch();
  const handleDeleteRoom = (id) => {
    if (window.confirm("Do you want to delete this room 🙄🙄🙄?")) {
      dispatch(deleteRoomRequest({ idRoom: id, idBrand: brandSelected.id }));
    }
  };
  const handleOpen = (values) => {
    dispatch(pushRoomItemDataToStore(values));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Result = () => {
    const temp = [];
    for (var i = 1; i <= brandSelected.floor; i++) {
      let temp1 = listRoomOfBrand.filter((item, index) => item.floor === i);

      temp1.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) return -1;
        return 0;
      });
     
      let floor = (
        <Card key={i} style={{ width: "100%", margin: "1em 0 1em 0" }}>
          <CardHeader title={`Floor ${i}`}></CardHeader>
          <Divider></Divider>
          <CardContent>
            <Grid container spacing={2}>
              {temp1.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Grid item xs={2}>
                      <Card style={{ height: "12em", position: "relative" }}>
                        <CardMedia
                          className={classes.room}
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={item.roomType.thumbnail}
                          title="Contemplative Reptile"
                        ></CardMedia>
                        <CardContent className={classes.content}>
                          <Typography gutterBottom variant="h4" component="h1">
                            Name: {`${item.name}`}
                          </Typography>
                          <Typography
                            className={classes.textColor}
                            gutterBottom
                            variant="h6"
                            component="h1"
                          >
                            Roomtype: {`${item.roomType.name}`}
                          </Typography>
                          <Typography
                            className={classes.textColor}
                            gutterBottom
                            variant="h6"
                            component="h1"
                          >
                            Price: {`${item.roomType.price} $`}
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                          <IconButton
                            onClick={() => handleDeleteRoom(item.id)}
                            size="small"
                            className={classes.btnDelete}
                          >
                            <HighlightOffIcon></HighlightOffIcon>
                          </IconButton>
                          <IconButton
                            onClick={() => handleOpen(item)}
                            size="small"
                            className={classes.btnEdit}
                          >
                            <EditIcon></EditIcon>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Fragment>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      );

      temp.push(floor);
    }
    return temp;
  };
  if (listRoomOfBrand.length === 0) return <Warning></Warning>;
  return (
    <div className={classes.root}>
      <ModalEditRoom open={open} handleClose={handleClose}></ModalEditRoom>
      {Result()}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
    width: "100%",
  },
  room: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  content: {
    position: "relative",
    backgroundColor: "transparent",
    height: "100%",
  },
  textColor: {
    color: theme.palette.white,
  },
  cardAction: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  btnDelete: {
    backgroundColor: theme.palette.error.dark,
  },
  btnEdit: {
    backgroundColor: theme.palette.primary.dark,
  },
}));
export default ListRoomOfBrand;
