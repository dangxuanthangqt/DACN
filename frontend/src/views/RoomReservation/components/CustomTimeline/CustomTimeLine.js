import React, { Component, Fragment, useEffect, useState } from "react";
import moment from "moment";

import Timeline, {
  DateHeader,
  TimelineHeaders,
  SidebarHeader,
} from "react-calendar-timeline";
import { Typography, Card, Grid, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import Warning from "views/RoomManagement/components/ListRoomOfBrand/Warning";
import {
  filterFollowPendingStatus,
  filterFollowCompletedStatus,
  filterFollowCancelledStatus,
  getAllReservationRequest,
} from "redux/actionCreators/roomReservationActionCreator";
import history from "helper/history";
import { useRouteMatch } from "react-router-dom";
import { toastifyError } from "helper/Toastify";
import ModalReservationDetail from "views/RoomReservationList/components/ModalReservationDetail";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
  },
  SidebarHeader: {
    backgroundColor: theme.palette.secondary.light,
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  DateHeader: {
    backgroundColor: theme.palette.secondary.light,
  },
  btnRejected: {
    backgroundColor: theme.palette.error.dark,
  },
}));
export default function CustomTimeLine() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [open, setOpen] = useState(false);
  const defaultTimeStart = moment().startOf("day").add(-5, "day").toDate();
  const defaultTimeEnd = moment()
    .startOf("day")
    .add(+25, "day")
    .toDate();
  const groups = useSelector((state) => state.roomReservation.groups);
  const items = useSelector((state) => state.roomReservation.items);
  const listReservation = useSelector(
    (state) => state.roomReservation.listReservation
  );

  // useEffect(() => {
  //   dispatch(getAllReservationRequest(brandSelected.id));

  // }, [dispatch]);
  const pendingCount = useSelector(
    (state) => state.roomReservation.pendingCount
  );
  const completeCount = useSelector(
    (state) => state.roomReservation.completeCount
  );
  const cancelledCount = useSelector(
    (state) => state.roomReservation.cancelledCount
  );
  const totalCount = useSelector((state) => state.roomReservation.totalCount);
  const handleOpen = ()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    
     setOpen(false);
   
  }
  const handleClick=(itemId)=>{
    let index = listReservation.findIndex(element=> element.id === itemId);
    
      dispatch({
        type: "SET_DATA_MODAL_RESEVATION_DETAIL",
        payload: listReservation[index]
      })
      handleOpen();
    

    
  }
  const handleFilterFolowStatus = (status) => {
    // history.push(`${match.url}/filter-status`);
    // console.log(`${match.url}/filter-status`)

    if (status === "PENDING") {
      if (pendingCount === 0) {
        toastifyError("Pending reservation list is empty !");
      } else {
        dispatch(filterFollowPendingStatus());
        history.push(`${match.url}/filter-status/pending`);
      }
    } else if (status === "COMPLETED") {
      if (completeCount === 0) {
        toastifyError("Accepted reservation list is empty !");
      } else {
        dispatch(filterFollowCompletedStatus());
        history.push(`${match.url}/filter-status/completed`);
      }
    } else if (status === "REJECTED") {
     
      if (cancelledCount === 0) {
        toastifyError("Cancelled reservation list is empty !");
      } else {
        dispatch(filterFollowCancelledStatus());
        history.push(`${match.url}/filter-status/cancelled`);
      }
    } else {
      if (listReservation.length === 0) {
        toastifyError("Reservation list is empty !");
      } else {
        history.push(`${match.url}/filter-status/all`);
      }
    }
  };
  if (groups.length === 0) return <Warning></Warning>;
  return (
    <Fragment>
      <ModalReservationDetail open={open} handleClose={handleClose}></ModalReservationDetail>
      <div
        style={{
          marginTop: "1em",
          display: "flex",
          borderRadius: "5px",
          padding: "1em",
          border: "1px solid gray",
        }}
        spacing={3}
      >
        <Grid item style={{ marginRight: "1em" }}>
          <Badge color="secondary" badgeContent={pendingCount}>
            <Button
              onClick={() => handleFilterFolowStatus("PENDING")}
              style={{ backgroundColor: "#ff9800" }}
              size="small"
              fullWidth
              variant="contained"
            >
              Reservation pending
            </Button>
          </Badge>
        </Grid>
        <Grid item style={{ marginRight: "1em" }}>
          <Badge color="secondary" badgeContent={completeCount}>
            <Button
              onClick={() => handleFilterFolowStatus("COMPLETED")}
              style={{
                backgroundColor: "#4caf50",
              }}
              size="small"
              fullWidth
              variant="contained"
            >
              Reservation accepted
            </Button>
          </Badge>
        </Grid>
        <Grid item style={{ marginRight: "1em" }}>
          <Badge color="secondary" badgeContent={cancelledCount}>
            <Button
              onClick={() => handleFilterFolowStatus("REJECTED")}
              className={classes.btnRejected}
              size="small"
              fullWidth
              variant="contained"
            >
              Reservation rejected
            </Button>
          </Badge>
        </Grid>
        <Grid item>
          <Badge color="secondary" badgeContent={totalCount}>
            <Button
              onClick={() => handleFilterFolowStatus("ALL")}
              size="small"
              fullWidth
              color="primary"
              variant="contained"
            >
              Reservation all
            </Button>
          </Badge>
        </Grid>
      </div>
      <Card className={classes.root}>
        <Timeline
          groups={groups}
          items={items}
          keys={keys}
          sidebarContent={<div>Above The Leftaaaa</div>}
          itemsSorted
          itemTouchSendsClick={false}
          onItemClick={(itemId) => {
            handleClick(itemId);
          }}
          stackItems
          itemHeightRatio={0.75}
          showCursorLine
          canMove={false}
          canResize={false}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
        >
          <TimelineHeaders className="sticky">
            <SidebarHeader>
              {({ getRootProps }) => {
                return (
                  <div {...getRootProps()} className={classes.SidebarHeader}>
                    <Typography variant="h5">Room</Typography>
                  </div>
                );
              }}
            </SidebarHeader>
            <DateHeader className={classes.DateHeader} unit="primaryHeader" />
            <DateHeader />
          </TimelineHeaders>
        </Timeline>
      </Card>
    </Fragment>
  );
}
