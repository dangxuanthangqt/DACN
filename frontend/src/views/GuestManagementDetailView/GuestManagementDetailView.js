import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Header from './Component/Header/Header';
import { Tabs, Tab, Divider } from '@material-ui/core';
import { useRouteMatch, Redirect, Route, Switch } from 'react-router-dom';
import history from 'helper/history';
import Summary from './Component/Summary/Summary';
import Error404 from 'views/Error404';

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
    console.log(match);
    const {id, tab} = match.params;
    const tabs = [
        { value: 'summary', label: 'Summary' },
        { value: 'invoices', label: 'Invoices' },
      ];
    const handleClick=(data)=>{
      //  console.log(`/management/guests/${id}/${data}`)
        history.push(`/management/guests/${id}/${data}`)
    }
    if(!tab) {
        return <Redirect to={`${match.url}/summary`}></Redirect>
    }
    return (
        <div className={classes.root}>
            <Header></Header>
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
                <Switch>
                <Route exact path={`/management/guests/:id/summary`} component={Summary}></Route>
                <Route path='*' component={Error404}></Route>
                </Switch>
                
           </div>
        </div>
    );
};


GuestManagementDetailView.propTypes = {

};


export default GuestManagementDetailView;
