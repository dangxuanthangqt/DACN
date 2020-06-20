import React, { Component, Fragment } from "react";
import moment from "moment";

import Timeline, {
  DateHeader,
  TimelineHeaders,
  SidebarHeader,
} from "react-calendar-timeline";
import { Typography, Card, Grid, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import Warning from "views/RoomManagement/components/ListRoomOfBrand/Warning";

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
}));
export default function CustomTimeLine() {
  const classes = useStyles();
  const defaultTimeStart = moment().startOf("day").add(-5, "day").toDate();
  const defaultTimeEnd = moment()
    .startOf("day")
    .add(+25, "day")
    .toDate();
  const groups = useSelector((state) => state.roomReservation.groups);
  const items = useSelector((state) => state.roomReservation.items);
  const pendingCount = useSelector(
    (state) => state.roomReservation.pendingCount
  );
  const completeCount = useSelector(
    (state) => state.roomReservation.completeCount
  );
  if (groups.length === 0) return <Warning></Warning>;
  return (
    <Fragment>
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
              style={{ backgroundColor: "#ff9800" }}
              size="small"
              fullWidth
              color="primary"
              variant="contained"
            >
              Reservation pending
            </Button>
          </Badge>
        </Grid>
        <Grid item>
          <Badge color="secondary" badgeContent={completeCount}>
            <Button
              style={{
                backgroundColor: "#4caf50",
              }}
              size="small"
              fullWidth
              color="primary"
              variant="contained"
            >
              Reservation accepted
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
            console.log(itemId);
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
