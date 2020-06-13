import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
HotelSelection.propTypes = {
    
};

function HotelSelection(props) {
    const listHotel = props.listHotel.map(item=> { return {value: item.id, label: item.name}});
    const {handleChangeListBrand} = props;
    const handleChange=(values)=>{
        handleChangeListBrand(values);
    }
    return (
       <Select
       placeholder="Please chose a hotel."
       options={listHotel}
       onChange={handleChange}
       formatGroupLabel={formatGroupLabel}
       >
       </Select>
    );
}
const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
export default HotelSelection;