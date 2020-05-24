import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Card, CardHeader, Divider, Table, TableHead, TableCell, Avatar, Link, TableRow, Button, TableBody, CardContent } from '@material-ui/core';
import { DataGuests } from 'assets/fakeData/DataGuests';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import ReviewStars from 'components/ReviewStars';


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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                        </TableCell>
                            <TableCell>
                                Location
                        </TableCell>
                            <TableCell>
                                Money spent
                        </TableCell>
                            <TableCell>
                                abc
                        </TableCell>
                            <TableCell>
                                Reviews
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
                                                {guest.name}
                                            </Avatar>
                                            <div>
                                                <Link
                                                    color='inherit'
                                                    component={RouterLink}
                                                    to="/test"
                                                    variant='h6'

                                                >
                                                    {guest.name}
                                                </Link>
                                                <div>{guest.email}</div>
                                            </div>
                                        </div>

                                    </TableCell>
                                    <TableCell>
                                        {guest.location}
                                    </TableCell>
                                    <TableCell>
                                        {guest.spent}
                                    </TableCell>
                                    <TableCell>
                                        {guest.type}
                                    </TableCell>
                                    <TableCell>
                                        <ReviewStars value={guest.rating}></ReviewStars>
                                    </TableCell>
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