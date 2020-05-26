import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGuestInforRequest } from 'redux/actionCreators/guestsActionCreator';
import { useRouteMatch } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  content1: {
    flexGrow: 5
  },
  content2: {
    flexGrow: 1
  },
  buttonIcon: {},
  actions: {
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(2)
  },
  buttonRed:{
    margin: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
}))
const GuestInfor = (props) => {
  const guestInfor  =  useSelector(state => state.guest.guestInfor);
  const dispatch = useDispatch();
  const classes = useStyles();
  const match = useRouteMatch()
  useEffect(() => {
    dispatch(fetchGuestInforRequest(match.params.id))
   
  }, []);
  console.log(guestInfor);
  return (
    <div className={classes.root}>
      <Card
        className={classes.content1}
      >
        <CardHeader title="Guest info" />
        <Divider />
        <CardContent className={classes.content}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Fist Name</TableCell>
                <TableCell>
                  {guestInfor.firstName}
              </TableCell>
              </TableRow>
              <TableRow selected>
                <TableCell>Last Name</TableCell>
              <TableCell>{guestInfor.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{guestInfor.email}</TableCell>
              </TableRow>
              <TableRow selected>
                <TableCell>Birthday</TableCell>
                <TableCell>{
                   format(guestInfor.birthday, 'MM/dd/yyyy')
                  //"adddd"
                  } </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>{
                
                           guestInfor.status === true ? <Button style={
                               {
                                   color:"white",
                                   backgroundColor:"green",
                               }
                           }>Active</Button>:<Button style={
                               {   color:"white",
                                   backgroundColor:"red",
                               }
                           }>Locked</Button>
                       
                  }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>{
                
                guestInfor.role === "admin" ? <Button style={
                  {   color:"white",
                      backgroundColor:"#e65100",
                  }
              }>Admin</Button>:<Button style={
                  {color:"white",
                      backgroundColor:"#81c784",
                  }
              }>Guest</Button>
          
                       
                  }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

        {/* <CustomerEdit
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
      /> */}
      </Card >
      <Card className={classes.content2}>
        <CardActions className={classes.actions}>
          <Button className={classes.button} variant="contained" color="primary" >
            <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
          <Button
            className={classes.buttonRed}
          >
            <LockOpenIcon className={classes.buttonIcon} />
          Lock Account
        </Button>
          <Button
            
            
            className={classes.buttonRed}
            startIcon={<DeleteIcon />}
          >
            Delete
      </Button>
        </CardActions>
      </Card>
    </div>

  );
};


GuestInfor.propTypes = {

};
GuestInfor.defaultProps = {
  
}


export default GuestInfor;
