import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import { useDispatch } from 'react-redux';
import { selectBrandOfHotel, getAllRoomByBrandIdRequest } from 'redux/actionCreators/roomActionCreator';
import { getAllRoomReservationRequest } from 'redux/actionCreators/roomReservationActionCreator';

BrandSelection.propTypes = {
    
};
BrandSelection.defaultProps={
    listBrand :[]
}
function BrandSelection(props) {
    const { handleChangeBrandSelected, value} = props;
    const dispatch = useDispatch();
    const optionBrand = props.listBrand.map(item => ({
        value : item.id,
        label : item.name
    }))
    const handleChangeBrandSelectedOnRedux =(values)=>{
        let brandSelected = props.listBrand.find(item=> item.id === values.value);
        dispatch(selectBrandOfHotel(brandSelected));
    }
    const handleChange=(values)=>{
        handleChangeBrandSelected(values);
        handleChangeBrandSelectedOnRedux(values);
        dispatch(getAllRoomReservationRequest(values.value))
    }
    return (
        <Select
        styles={{
            // Fixes the overlapping problem of the component
            menu: provided => ({ ...provided, zIndex: 9999 })
          }}
        value={value}
        placeholder="Please select brand of hotel."
        onChange={handleChange}
        options={ optionBrand}
        >
        </Select>
    );
}

export default BrandSelection;