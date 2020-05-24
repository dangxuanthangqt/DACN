import React from 'react';
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

  import EditIcon from '@material-ui/icons/Edit';
  import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
  import PersonIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/styles';

  const useStyles = makeStyles( theme =>({
      content:{},
      buttonIcon:{},
      actions:{}
  }))
const GuestInfor = (props) => {
    const {guestInfor} = props;
    const classes = useStyles();
    return (
        <Card
    
     
    >
      <CardHeader title="Guest info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>
                Dangxuanthangqt@gmail.com
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Phone</TableCell>
              <TableCell>23432432</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>adsdsds asdsdad</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>fdssfdfs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>asddsadsaad</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button >
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <LockOpenIcon className={classes.buttonIcon} />
          Lock Account
        </Button>
        
      </CardActions>
      {/* <CustomerEdit
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
      /> */}
    </Card>
    );
};


GuestInfor.propTypes = {

};
GuestInfor.defaultProps={
    guestInfor :{}
}


export default GuestInfor;
