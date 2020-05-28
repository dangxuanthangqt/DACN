import { Divider, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import history from 'helper/history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { fetchGuestInforRequest } from 'redux/actionCreators/guestsActionCreator';
import Header from './Component/Header/Header';
import Summary from './Component/Summary/Summary';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    tabs:{
        marginTop: theme.spacing(3)
    },
    content:{
        marginTop: theme.spacing(3)
    }
}))
const GuestManagementDetailView = (props) => {
    const classes = useStyles();
    const match = useRouteMatch();
    const guestInfor = useSelector(state => state.guest.guestInfor);
    const dispatch = useDispatch();
    const [openEdit, setOpenEdit]= useState(false);
    
    //console.log(match);
    const {id, tab} = match.params;
    const tabs = [
        { value: 'summary', label: 'Summary' },
        { value: 'invoices', label: 'Invoices' },
      ];
      useEffect(() => {
        dispatch(fetchGuestInforRequest(match.params.id))
        //console.log(match.params.id);
    
      }, [dispatch]);
    const handleClick=(data)=>{
      //  console.log(`/management/guests/${id}/${data}`)
        history.push(`/management/guests/${id}/${data}`)
    }
    const handleOpen=()=>{
        setOpenEdit(true);
    }
    const handleClose=()=>{
        setOpenEdit(false);
    }
    if(!tab) {
        return <Redirect to={`${match.url}/summary`}></Redirect>
    }
    return (
        <div className={classes.root}>
            <Header email={guestInfor.email}></Header>
           <Tabs 
           className={classes.tabs}
           scrollButtons="auto"
           variant ="scrollable"
           value={tab}
           >
               {tabs.map((tab)=>(
                   <Tab
                   key={tab.value}
                   label={tab.label}
                   value ={tab.value}
                   onClick={()=> handleClick(tab.value)}
                   >
                   </Tab>
               ))}
           </Tabs>
           <Divider></Divider>
           <div className={classes.content}>
                {/* <Switch>
                <Route exact path={`/management/guests/:id/summary`} component={Summary}></Route>
                <Route path='*' render={()=> (<Redirect to="/errors/error-404" ></Redirect>)}></Route>
                </Switch> */}
                {tab==='summary' && <Summary open={openEdit} handleOpenEdit={handleOpen} handleCloseEdit={handleClose} guestInfor={guestInfor}></Summary>}
                
           </div>
        </div>
    );
};


GuestManagementDetailView.propTypes = {

};


export default GuestManagementDetailView;
