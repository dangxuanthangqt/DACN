import { Button, Container, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import EditRoomtype from './component/EditRoomtype';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)

    }
}));

EditRoomtypeView.propTypes = {

};

function EditRoomtypeView(props) {
    const history = useHistory();
    const classes = useStyles();
    const handleBack = () => {
        history.goBack();
    }
    //const roomtype = useSelector(state=> state.roomType.detailRoomType);
    return (
        <Container>
            <div

                className={classes.root}
            >
                <Grid
                    alignItems="flex-end"
                    container
                    justify="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            component="h2"
                            gutterBottom
                            variant="overline"
                        >
                            Management
                     </Typography>
                        <Button
                            size="small"
                            onClick={handleBack}
                            variant="contained"
                            color="primary"
                        >
                            <ArrowBackIosIcon></ArrowBackIosIcon>
                        Back to roomtype detail management
                        </Button>
                    </Grid>

                </Grid>
            </div>
            <EditRoomtype ></EditRoomtype>
        </Container>
    );
}

export default EditRoomtypeView;