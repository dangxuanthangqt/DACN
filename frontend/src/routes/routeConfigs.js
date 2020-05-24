
import React, { lazy } from 'react';
import Authlayout from '../layouts/Auth';
import Errorlayout from '../layouts/Error';
import Dashboardlayout from '../layouts/Dashboard';
export const publicRoutes = [

    {
        layout: Authlayout,
        subroutes:
            [{
                key: 'login',
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('../views/Login'))
            },
            {
                key: 'register',
                path: '/auth/register',
                exact: true,
                component: lazy(() => import('../views/Register'))
            }]
    },
    {
        layout: Errorlayout,
        subroutes:[
            {
                key:'error404',
                path:'/errors/error-404',
                exact: true,
                component : lazy(()=> import('../views/Error404'))
            },
            {
                key:'error401',
                path:'/errors/error-401',
                exact: true,
                component : lazy(()=> import('../views/Error401'))
            },
            {
                key:'error500',
                path:'/errors/error-500',
                exact: true,
                component : lazy(()=> import('../views/Error500'))
            }

        ]
    }
];
export const privateRoutes =[
    {
        layout: Dashboardlayout,
        subroutes:[
            {
                key: 'test',
                path: '/test',
                exact: true,
                component: lazy(()=> import('../views/Test/Test'))
            },
            {
                key:'room type',
                path:'/management/room-types',
                exact: true,
                component: lazy(()=> import('../views/RoomTypeView'))
            },
            {
                key:"detail room type",
                path:'/management/room-types/:id',
                exact: true,
                component: lazy(()=> import('../views/RoomTypeDetailView/RoomTypeDetailView'))
            }
        ]
    }
]
