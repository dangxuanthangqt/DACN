import React, { Component } from "react";
import moment from "moment";

import Timeline, {
  DateHeader,
  TimelineHeaders,
  SidebarHeader,
} from "react-calendar-timeline";
import { Typography, Card } from "@material-ui/core";
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
  const defaultTimeStart = moment().startOf("month").toDate();
  const defaultTimeEnd = moment().startOf("month").add(30, "day").toDate();
  const groups = useSelector(state => state.roomReservation.groups);
  const items= useSelector(state => state.roomReservation.items);
  
  if(groups.length === 0) return <Warning></Warning>;
  return (
    <Card className={classes.root}>
      <Timeline
        
        groups={groups}
        items={items}
        keys={keys}
        sidebarContent={<div>Above The Leftaaaa</div>}
        itemsSorted
        itemTouchSendsClick={false}
        onItemClick={(a, b, c) => {
          console.log(a, b, new Date(c));
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
  );
}

const groups = [
  {
    id: 1,
    title: "101",
  },
  {
    id: 2,
    title: "102",
  },
  {
    id: 3,
    title: "103",
  },
];
const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start: moment(),
    end: moment().add(24, "hour"),
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      "data-custom-attribute": "Random content",
      "aria-hidden": true,
      onClick: () => {
        console.log("You clicked double!");
      },
      className: "weekend",
      style: {
        backgroundColor: "fuchsia",
      },
    },
  },
  {
    id: 2,
    group: 1,
    title: "item 1",
    start: moment().add(2, "day"),
    end: moment().add(5, "day"),
  },
  {
    id: 3,
    group: 3,
    title: "item 1",
    start: moment(),
    end: moment().add(3, "day"),
  },
];
