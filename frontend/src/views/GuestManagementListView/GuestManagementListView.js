import { Container } from '@material-ui/core';
import Search from 'components/SearchBar/Search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListGuestsRequest } from 'redux/actionCreators/guestsActionCreator';
import Header from './component/Header';
import Result from './component/Result';

GuestManagementListView.propTypes = {

};

function GuestManagementListView(props) {
    //const classes = useStyles();
    const guestList = useSelector(state => (state.guest.body));
    const length = useSelector(state => (state.guest.length))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListGuestsRequest());
    }, [dispatch]);
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