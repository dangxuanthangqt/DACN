import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { resetListRoomReservationOnRedux } from "redux/actionCreators/roomReservationActionCreator";
HotelSelection.propTypes = {};

function HotelSelection(props) {
  const listHotel = props.listHotel.map((item) => {
    return { value: item.id, label: item.name };
  });
  const dispatch = useDispatch();
  const hotelSelected = useSelector(state => state.rooms.hotelSelected);
  const { handleChangeListBrand } = props;
  const handleChange = (values) => {
    handleChangeListBrand(values);
    dispatch(resetListRoomReservationOnRedux());
    dispatch({
      type:"SET_HOTEL_SELECTED",
      payload: values
    })
  };
  return (
    <Select
      styles={{
        // Fixes the overlapping problem of the component
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
      }}
      defaultValue={hotelSelected ? hotelSelected :""}
      placeholder="Please select a hotel."
      options={listHotel}
      onChange={handleChange}
      formatGroupLabel={formatGroupLabel}
    ></Select>
  );
}
const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
export default HotelSelection;
