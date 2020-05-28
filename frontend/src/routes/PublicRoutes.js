import React from 'react';
import { Route } from 'react-router-dom';
function PublicRoutes(props) {
    const { component: Component, ...restProps } = props;
    return (
        <Route
        {...restProps}
        render ={ ()=> (
            <Component>
                
            </Component>
        ) }
        >
        </Route>
    );
}

export default PublicRoutes;
