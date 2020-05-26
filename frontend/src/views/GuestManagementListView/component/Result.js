import { Avatar, Button, Card, CardContent, CardHeader, Divider, Link, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';

Result.propTypes = {

};
const useStyles = makeStyles(theme => (
    {
        root: {

        },
        content: {
            padding: 0,
        },
        nameCell: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            height: 42,
            width: 42,
            marginRight: theme.spacing(1)
        },

    }
))

function Result(props) {
    const classes = useStyles();
    const { guests } = props;
    const match = useRouteMatch();
    console.log(match);
    return (
        <Card className={classes.root}>
            <CardHeader
                title="All Guest"
            >
            </CardHeader>
            <Divider>
            </Divider>
            <CardContent className={classes.content}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                        </TableCell>
                            <TableCell>
                                Phone nummber
                        </TableCell>
                            <TableCell>
                                Birthday
                        </TableCell>
                            <TableCell>
                                Status
                        </TableCell>
                            <TableCell>
                                Role
                        </TableCell>
                            <TableCell align='right'>
                                Action
                        </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            guests.map((guest, index) => (
                                <TableRow key={index}>
                                    <TableCell >
                                        <div className={
                                            classes.nameCell
                                        }>
                                            <Avatar>
                                                {guest.firstName}
                                            </Avatar>
                                            <div>
                                                <Link
                                                    color='inherit'
                                                    component={RouterLink}
                                                    to={`${match.url}/${guest.id}`}
                                                    variant='h6'

                                                >
                                                   {guest.firstName} &nbsp; {guest.lastName}
                                                </Link>
                                                <div>{guest.email}</div>
                                            </div>
                                        </div>

                                    </TableCell>
                                    <TableCell>
                                        {guest.phoneNumber}
                                    </TableCell>
                                    <TableCell>
                                    {format(guest.birthday, 'MM/dd/yyyy')}
                                    </TableCell>
                                    <TableCell>
                                        {guest.status === true ? <Button style={
                                            {
                                                color:"white",
                                                backgroundColor:"green",
                                            }
                                        }>Active</Button>:<Button style={
                                            {   color:"white",
                                                backgroundColor:"red",
                                            }
                                        }>Locked</Button>
                                    }
                                    </TableCell>
                                    <TableCell>
                                        {guest.role === "admin" ? <Button style={
                                            {   color:"white",
                                                backgroundColor:"#e65100",
                                            }
                                        }>Admin</Button>:<Button style={
                                            {color:"white",
                                                backgroundColor:"#81c784",
                                            }
                                        }>Guest</Button>
                                    }
                                    </TableCell>
                                    {/* <TableCell>
                                        <ReviewStars value={guest.rating}></ReviewStars>
                                    </TableCell> */}
                                    <TableCell align="right">
                                        <Button
                                            color="primary"
                                            component={RouterLink}
                                            size="small"
                                            to={`${match.url}/${guest.id}`}
                                            variant="outlined"
                                        >
                                            View
                                    </Button>
                                    </TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>

            </CardContent>
        </Card>
    );
}

export default Result;