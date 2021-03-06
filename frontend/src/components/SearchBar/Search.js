import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchUserRequest, fetchListGuestsRequest } from 'redux/actionCreators/guestsActionCreator';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom:theme.spacing(2) 
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

const Search = props => {
  const { onSearch, className, ...rest } = props;

  const classes = useStyles();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange=(event)=>{
    setValue(event.target.value);
  }
  const handleClick=()=>{
    dispatch(searchUserRequest(value));
  }
  useEffect(() => {
    if(value.length === 0){
      dispatch(fetchListGuestsRequest());
    }
    
  },[value, dispatch]);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
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
          placeholder="Search"
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
};

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search;
