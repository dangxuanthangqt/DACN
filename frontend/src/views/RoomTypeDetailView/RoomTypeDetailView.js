import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import ImgCover from './ImgCover';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomTypeDetailRequest } from 'redux/actionCreators/roomTypeActionCreator';
import { connect } from 'react-redux';

import image from '../../assets/images/room-1.jpeg'
import theme from 'theme';


RoomTypeDetailView.propTypes = {

};
const useStyles = makeStyles((them) => ({
    banner: {
        margin: 'auto',
        height: "200px",
        display: 'inline-block',
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem 8rem',
        textAlign: 'center',
        textTransform: 'capitalize',
        letterSpacing: '3px',
        color: '#fff'
    },
    h1: {
        fontSize: '4rem',
        color: '#e3f2fd'

    },
    section: {
        padding: '2rem 5rem 0 5rem',
    },
    singleRoom: {
        display: 'flex',

        justifyContent: 'space-around',
    },
    singleRoomImage: {
        width: '350px',
        height: '200px'
    },
    roomInfor: {
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    desc: {
        width: '45%',
        letterSpacing: '1.2rem'
    },
    inf: {
        
        width: '45%'
    },
    spacing: {marginBottom: theme.spacing(4)},
    gridContainer:{
        paddingTop:'2rem',
        display: 'grid',
        gridTemplateColumns:'auto auto auto',

    }
}))
function RoomTypeDetailView(props) {
    const classes = useStyles();
    let history = useHistory();
    let match = useRouteMatch();
    let dispatch = useDispatch();
    //const room = useSelector(state=> state.roomType.detailRoomType)


    const handleGoback = () => {
        history.goBack();
    }
    useEffect(() => {
        dispatch(fetchRoomTypeDetailRequest(match.params.id))

    }, [dispatch]);
    console.log(props.room);
    if (!props.room) {
        console.log("dangxuanthang")
        return (
            <div className="error">
                <h3>no such room could be found...</h3>
            </div>
        );
    }
  
    return (
        <Fragment>
            <ImgCover url={props.room.thumbnail}>

                <div className={classes.banner}>
                    <Typography className={classes.h1} variant="h1">
                        {props.room.name}
                    </Typography>
                    <div style={{
                        width: "10rem",
                        height: '5px',
                        background: '#e3f2fd',
                        margin: '1.7rem auto'
                    }}></div>
                    <button
                        onClick={handleGoback}
                        className="btn-primary">
                        Back to rooms
                </button>
                </div>
            </ImgCover>
            <section className={classes.section}>
                <div className={classes.singleRoom}>
                    {
                        props.room.images.map((item, index) => {
                            
                                return <img className={classes.singleRoomImage} key={index} src={item.name}></img>
                        })
                    }
                </div>
                <div className={classes.roomInfor}>
                    <div className={classes.desc}>
                        <Typography variant="h1">
                            Details
                    </Typography>
                        <div style={{
                            marginTop:'1.5rem'
                        }}> 
                        <Typography >
                            {
                                props.room.description
                            }
                        </Typography>
                        </div>
                        
                    </div>
                    <div className={classes.inf}>
                        <Typography  variant="h1"  >
                            Information
                        </Typography>
                        <div style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                        }}>
                        <Typography className={classes.spacing} variant="h4">
                            Price: {props.room.price} $
                        </Typography>
                        <Typography  className={classes.spacing} variant="h4">
                            Size: {props.room.size} M2
                        </Typography>
                        <Typography  className={classes.spacing} variant="h4">
                            Capacity: {props.room.capacity} People
                        </Typography>
                        </div>
                        
                    </div>
                   
                </div>
                <div>
                        <Typography variant="h1">
                            Extras
                        </Typography>
                <div className={classes.gridContainer}>
                        {
                            props.room.extras.map((item, index)=>{
                                return (
                                <Typography
                                variant="h5"
                                className={classes.spacing}
                                 key={index}>
                                    - {item.name}
                                </Typography>)
                            })
                        }
                </div>
                </div>
            </section>

        </Fragment>
    );
}
const mapStateToProps = state => ({
    room: state.roomType.detailRoomType
})
export default connect(mapStateToProps, null)(RoomTypeDetailView);