import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListRoomtypeRequest1 } from 'redux/actionCreators/promoActionCreator';

MySelect.propTypes = {
    
};

function MySelect(props) {
    const {field, form , label, placeholder} = props;
    const {name, value }= field;
    const options= useSelector(state => state.promotions.roomtypeSelect);
    const selectedOption = options.find(item=> item === value);
    const dispatch =useDispatch();
    const handleChange =(selectedOption)=>{
        const changeEvent ={
          target: { name: name, // alway target
            value: selectedOption.value
        }}
        field.onChange(changeEvent);
    }
    useEffect(() => {
       dispatch(fetchListRoomtypeRequest1());
    }, [dispatch]);
   // console.log(options);
    return (
       <FormControl
       fullWidth
       >
           <Select 
           styles={{
            // Fixes the overlapping problem of the component
            menu: provided => ({ ...provided, zIndex: 9999 })
          }}
           {...field}
            onChange={handleChange}
            value={selectedOption}
            options={options}
            placeholder={placeholder}
           >

           </Select>
       </FormControl>
    );
}

export default MySelect;