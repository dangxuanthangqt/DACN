import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Search from 'components/SearchBar/Search';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './component/Header';
import Result from './component/Result';
import { fetchListGuestsRequest } from 'redux/actionCreators/guestsActionCreator';

GuestManagementListView.propTypes = {

};
const useStyles = makeStyles(theme => ({
    root: {
        padding: '2rem'
    }
}))
function GuestManagementListView(props) {
    const classes = useStyles();
    const guestList = useSelector(state => (state.guest.body));
    const length = useSelector(state => (state.guest.length))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListGuestsRequest())

    }, []);
    return (
        <Container
        >
            <Header></Header>
            <Search></Search>
            <Result guests={guestList}  length ={length}></Result>
        </Container>
    );
}

export default GuestManagementListView;