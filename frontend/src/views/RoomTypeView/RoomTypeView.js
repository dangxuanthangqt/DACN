import { Container } from "@material-ui/core";
import RoomTypeList from "components/RoomTypeList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListRoomTypeRequest } from "redux/actionCreators/roomTypeActionCreator";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";

RoomTypeView.propTypes = {};

function RoomTypeView(props) {
  const rooms = useSelector((state) => state.roomType.listRoomType);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListRoomTypeRequest());
  }, [dispatch]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Header handleOpen={handleOpen}></Header>
        <SearchBar></SearchBar>
        <RoomTypeList rooms={rooms}></RoomTypeList>
      </div>
    </Container>
  );
}

export default RoomTypeView;
