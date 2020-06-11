import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../assets/images/gif/loading.gif';
GlobalLoading.propTypes = {

};

function GlobalLoading(props) {
    const showLoading = useSelector(state => (state.showLoading));
    var xhtml;
    if (!showLoading.showLoading) xhtml = <div></div>;
    else xhtml = (<div style={{
        background: 'rgba(0,0,0,0.4)',
        zIndex: 10000,
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }} >
        <div>
            <img style={{ float: "none" }} width={60} height={60} src={Loading} alt="Loading..." />
        </div>

    </div>)
    return xhtml;


}

export default GlobalLoading;