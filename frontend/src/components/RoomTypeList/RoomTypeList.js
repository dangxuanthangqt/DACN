import React from 'react';
import PropTypes from 'prop-types';
import RoomType from 'components/RoomType/RoomType';


const RoomTypeList = (props) => {
    // if (props.rooms.length === 0) {
    //     return (
    //         <div className="empty-search">
    //             <h3>unfortunately no rooms matched your search parameters</h3>
    //         </div>
    //     )
    // }

    return (
    <section className="roomslist">
            <div className="roomslist-center">
                { props.rooms.map(item => {
                    return <RoomType key={item.id} room={item} />
                }) }
            </div>
        </section>
    )
};


RoomTypeList.propTypes = {

};
RoomTypeList.defaultProps={

}


export default RoomTypeList;
