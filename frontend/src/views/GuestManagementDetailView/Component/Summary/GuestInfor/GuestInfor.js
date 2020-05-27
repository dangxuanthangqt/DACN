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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import EditGuestInfor from '../EditGuestInfor/EditGuestInfor';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  content1: {
    flexGrow: 5
  },
  content2: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonIcon: {},
  actions: {
    flexDirection: 'column',

  },
  button: {
    width: '10rem',
    margin: theme.spacing(2)
  },
  buttonRed: {
    width: '10rem',
    margin: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
}))
const GuestInfor = (props) => {
  
  const { guestInfor, open, handleOpenEdit, handleCloseEdit } = props;
  const classes = useStyles();
  const match = useRouteMatch()

  //console.log(guestInfor);
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
                <TableCell > <h4>Fist Name</h4></TableCell>
                <TableCell>
                  {guestInfor.firstName}
                </TableCell>
              </TableRow>
              <TableRow selected>
                <TableCell><h4>Last Name</h4></TableCell>
                <TableCell>{guestInfor.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h4>Email</h4></TableCell>
                <TableCell>{guestInfor.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h4>Phone number</h4></TableCell>
                <TableCell>{guestInfor.phone}</TableCell>
              </TableRow>
              <TableRow selected>
                <TableCell><h4>Birthday</h4></TableCell>
                <TableCell>{
                  format(new Date(guestInfor.birthday), 'MM/dd/yyyy')
                  //"adddd"
                } </TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h4>Status</h4></TableCell>
                <TableCell>
                  {guestInfor.status === "ACTIVE" ? <Button style={
                    {
                      color: "white",
                      backgroundColor: "green",
                    }
                  }>Active</Button> : <Button style={
                    {
                      color: "white",
                      backgroundColor: "red",
                    }
                  }>Disable</Button>
                  }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h4>Role</h4></TableCell>
                <TableCell>{

                  guestInfor.roleEntities.map((item, index) => {
                    if (item.name === "ROLE_USER") return <Button key={index} style={
                      {
                        color: "white",
                        backgroundColor: "#1976d2",
                        marginRight: "5px"
                      }
                    }>User</Button>;
                    else {
                      return <Button key={index} style={
                        {
                          color: "white",
                          backgroundColor: "#e65100",
                        }
                      }>Admin</Button>
                    }
                  })

                }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
       <EditGuestInfor
       open={open}
       handleCloseEdit={handleCloseEdit}
       >

       </EditGuestInfor>
      </Card >

      <Action handleOpenEdit={handleOpenEdit} roleEntities={guestInfor.roleEntities}></Action>

    </div>

  );
};

const Action = (props) => {
  const classes = useStyles();
  const { roleEntities, handleOpenEdit } = props;
  console.log(roleEntities)
  if (roleEntities.length > 1) return (
    <Card className={classes.content2}>
      <CardHeader title="Action" />
      <Divider></Divider>
      <CardActions className={classes.actions}>
        <Button
        
         className={classes.button} variant="contained" color="primary" >
          <EditIcon className={classes.buttonIcon} />
        Edit
      </Button>
      </CardActions>
    </Card>
  )
  else {
    if (roleEntities[0].name === "ROLE_USER") return (
      <Card className={classes.content2}>
        <CardHeader title="Action" />
        <Divider></Divider>
        <CardActions className={classes.actions}>
          <Button
          onClick={handleOpenEdit}
           className={classes.button} variant="contained" color="primary" >
            <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
          <Button
            className={classes.buttonRed}
          >
            <LockOpenIcon className={classes.buttonIcon} />
          Disable user
        </Button>
          <Button
            
            className={classes.buttonRed}
            startIcon={<DeleteIcon />}
          >
            Delete
      </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<ExpandLessIcon />}
          >
            Up role
      </Button>
        </CardActions>
      </Card>
    )
    else {
      return (
        <Card className={classes.content2}>
          <CardHeader title="Action" />
          <Divider></Divider>
          <CardActions className={classes.actions}>
            <Button className={classes.button} variant="contained" color="primary" >
              <EditIcon className={classes.buttonIcon} />
            Edit
          </Button>
          </CardActions>
        </Card>
      )
    }
  }
}
GuestInfor.propTypes = {

};
GuestInfor.defaultProps = {
  guestInfor: {
    "id": 2,
    "email": "khanhadmin1025@gmail.com",
    "roleEntities": [
      {
        "id": 2,
        "name": "ROLE_USER"
      },
      {
        "id": 1,
        "name": "ROLE_ADMIN"
      }
    ],
    "firstName": "khanh",
    "lastName": "nguyen",
    "status": "ACTIVE",
    "birthday": "2020-05-27",
    "phone": "0382189922"
  }
}


export default GuestInfor;
