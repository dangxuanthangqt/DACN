import React, { lazy } from "react";
import Authlayout from "../layouts/Auth";
import Errorlayout from "../layouts/Error";
import Dashboardlayout from "../layouts/Dashboard";
export const publicRoutes = [
  {
    layout: Authlayout,
    subroutes: [
      {
        key: "login",
        path: "/auth/login",
        exact: true,
        component: lazy(() => import("../views/Login")),
      },
      {
        key: "register",
        path: "/auth/register",
        exact: true,
        component: lazy(() => import("../views/Register")),
      },
    ],
  },
  {
    layout: Errorlayout,
    subroutes: [
      {
        key: "error404",
        path: "/errors/error-404",
        exact: true,
        component: lazy(() => import("../views/Error404")),
      },
      {
        key: "error401",
        path: "/errors/error-401",
        exact: true,
        component: lazy(() => import("../views/Error401")),
      },
      {
        key: "error500",
        path: "/errors/error-500",
        exact: true,
        component: lazy(() => import("../views/Error500")),
      },
    ],
  },
];
export const privateRoutes = [
  {
    layout: Dashboardlayout,
    subroutes: [
      {
        key: "OverView",
        path: "/overview",
        exact: true,
        component: lazy(() => import("../views/Overview")),
      },
      {
        key: "room type",
        path: "/management/room-types",
        exact: true,
        component: lazy(() => import("../views/RoomTypeView")),
      },
      {
        key: "add room type",
        path: "/management/room-types/add",
        exact: true,
        component: lazy(() => import("../views/AddRoomTypeView")),
      },
      {
        key: "edit room type",
        path: "/management/room-types/edit/:id",
        exact: true,
        component: lazy(() => import("../views/EditRoomtypeView")),
      },
      {
        key: "detail room type",
        path: "/management/room-types/:id",
        exact: true,
        component: lazy(() =>
          import("../views/RoomTypeDetailView/RoomTypeDetailView")
        ),
      },
      {
        key: " list guest",
        path: "/management/guests",
        exact: true,
        component: lazy(() => import("../views/GuestManagementListView")),
      },
      {
        key: "guest detail",
        path: "/management/guests/:id",
        exact: true,
        component: lazy(() => import("../views/GuestManagementDetailView")),
      },
      {
        key: "guest detail1",
        path: "/management/guests/:id/:tab",
        exact: true,
        component: lazy(() => import("../views/GuestManagementDetailView")),
      },
      {
        key: "hotel",
        path: "/management/hotel",
        exact: true,
        component: lazy(() => import("../views/Hotel/Hotel")),
      },
      {
        key: "hotel_create",
        path: "/management/hotel/add",
        exact: true,
        component: lazy(() => import("../views/Hotel/components/HotelCreate")),
      },
      {
        key: "hotel_edit",
        path: "/management/hotel/edit/:id",
        exact: true,
        component: lazy(() => import("../views/Hotel/components/HotelEdit")),
      },
      {
        key: "hotel_detail",
        path: "/management/hotel/detail/:id",
        exact: true,
        component: lazy(() => import("../views/Hotel/components/HotelDetail")),
      },
      {
        key: "promotions",
        path: "/management/promotions",
        exact: true,
        component: lazy(() => import("../views/Promotion")),
      },
      {
        key: "room",
        path: "/management/rooms",
        exact: true,
        component: lazy(() => import("../views/RoomManagement")),
      },
      {
        key: "room-reservation",
        path: "/management/room-reservation",
        exact: true,
        component: lazy(() => import("../views/RoomReservation")),
      },
      {
        key: "list room-reservation",
        path: "/management/room-reservation/filter-status/:status",
        exact: true,
        component: lazy(() => import("../views/RoomReservationList")),
      },
      {
        key: "analytics",
        path:  "/dashboards/analytics",
        exact: true,
        component: lazy(() => import("../views/Analytics")),
      },
    ],
  },
];
