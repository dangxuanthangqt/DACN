import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectBrandOfHotel } from "redux/actionCreators/roomActionCreator";
import {
  getAllReservationRequest,
  getAllRoomReservationRequest,
} from "redux/actionCreators/roomReservationActionCreator";
import { roomReservationSaga } from "redux/sagas/roomReservationSaga";

BrandSelection.propTypes = {};
BrandSelection.defaultProps = {
  listBrand: [],
};
function BrandSelection(props) {
  const { handleChangeBrandSelected, value } = props;
  const brandSelected = useSelector(state => state.rooms.brandSelected1)
  const dispatch = useDispatch();
  const optionBrand = props.listBrand.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const handleChangeBrandSelectedOnRedux = (values) => {
    let brandSelected = props.listBrand.find(
      (item) => item.id === values.value
    );
    dispatch(selectBrandOfHotel(brandSelected));
  };
  const handleChange = (values) => {
    dispatch(getAllReservationRequest(values.value));
    handleChangeBrandSelected(values);
    handleChangeBrandSelectedOnRedux(values);
    dispatch(getAllRoomReservationRequest(values.value));
  };
  return (
    <Select
      styles={{
        // Fixes the overlapping problem of the component
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
      }}
      defaultValue={brandSelected ? {value : brandSelected.id, label: brandSelected.name}:""}
      placeholder="Please select brand of hotel."
      onChange={handleChange}
      options={optionBrand}
    ></Select>
  );
}

export default BrandSelection;
