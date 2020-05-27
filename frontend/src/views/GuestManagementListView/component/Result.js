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
                                                   {guest.firstName}&nbsp;{guest.lastName}
                                                </Link>
                                                <div>{guest.email}</div>
                                            </div>
                                        </div>

                                    </TableCell>
                                    <TableCell>
                                        {guest.phone}
                                    </TableCell>
                                    <TableCell>
                                    {format(new Date(guest.birthday), 'dd/MM/yyyy')}
                                    </TableCell>
                                     <TableCell>
                                        {guest.status === "ACTIVE" ? <Button style={
                                            {
                                                color:"white",
                                                backgroundColor:"green",
                                            }
                                        }>Active</Button>:<Button style={
                                            {   color:"white",
                                                backgroundColor:"red",
                                            }
                                        }>Disable</Button>
                                    }
                                    </TableCell>
                                    <TableCell>
                                        {guest.roleEntities.map((item , index)=>{
                                            if(item.name === "ROLE_USER") return <Button key={index} style={
                                                {   color:"white",
                                                    backgroundColor:"#1976d2",
                                                    marginRight: "5px"
                                                }
                                            }>User</Button>;
                                            else{
                                                return <Button key={index} style={
                                                    {   color:"white",
                                                        backgroundColor:"#e65100",
                                                    }
                                                }>Admin</Button>
                                            }
                                    }) 
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