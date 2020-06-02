import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchRoomtypeRequest, fetchListRoomTypeRequest } from 'redux/actionCreators/roomTypeActionCreator';
SearchBar.propTypes = {

};

function SearchBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleClick=()=>{
        dispatch(searchRoomtypeRequest(value));
    }
    useEffect(() => {
        if(value==""){
            dispatch(fetchListRoomTypeRequest());
        }
    },[value]);
    
    return (
        <div
           
            className={classes.root}
        >
            <Paper
                className={classes.search}
                elevation={1}
            >
                <SearchIcon className={classes.searchIcon} />
                <Input
                    name="search"
                    value={value}
                    onChange={handleChange}
                    className={classes.searchInput}
                    disableUnderline
                    placeholder="Search follow type of room"
                />
            </Paper>
            <Button
                onClick={handleClick}
                className={classes.searchButton}

                size="large"
                variant="contained"
            >
                Search
        </Button>
        </div>

    );
}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    search: {
        width: '30%',
        // flexGrow: 1,
        height: 42,
        padding: theme.spacing(0, 2),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        color: theme.palette.icon
    },
    searchInput: {
        flexGrow: 1
    },
    searchButton: {
        marginLeft: theme.spacing(2)
    }
}));
export default SearchBar;