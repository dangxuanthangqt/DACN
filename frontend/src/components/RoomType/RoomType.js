import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

RoomType.propTypes = {
    
};
const useStyles = makeStyles( them=>({
    textColor:{
        color: 'gray'
    }
}))
function RoomType(props) {
    const { name, thumbnail, price,id } = props.room;  
    const classes = useStyles();
    const match = useRouteMatch();
    //let temp =`${match.url}/${id}`;
    //console.log(`${match.url}/${id}`);
    //console.log(match);
   // console.log(`/${match.url}/${slug}`);
    return (
        <article className="room">
             <div className="img-container">
                <img src={thumbnail } alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <Typography  className={classes.textColor}>Per night</Typography>
                </div>
                <Link to={`${match.url}/${id}`} className="btn-primary room-link" >features</Link>
             </div>
             <p className="room-info">{name}</p>
        </article>
    );
}

export default RoomType;
