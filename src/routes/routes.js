import React from "react";
import Profile from "../components/Dashboard/Profile/Profile";
import InitialdDashdDataLoad from "../config/InitialdDashdDataLoad";
import {
  Dashboard,
  Main,
  News,
  Offers,
  Webmaster,
  Production,
  Users,
  CreateUser,
  EditUser,
  Tools,
  Finance,
  Statistics,
  Master,
  MVP,
  Tasks,
  Clients,
  CallCenter,
  Cabinet,
  Calls,
  MyStatistics,
  Orders,
  Appeals,
  Sales,
  Login,
  Analytics,
} from "../pages";

export const ROUTES = [
  {
    path: "/login",
    key: "LOGIN",
    component: () => <Login />,
  },
  {
    path: "/calls",
    key: "APP_MVP",
    component: () => <MVP />,
  },

  {
    path: "/",
    key: "APP_DASHBOARD",
    component: () =>
      <InitialdDashdDataLoad>
        <Dashboard />
      </InitialdDashdDataLoad>
  },
];

export const DASHBOARD_ROUTES = [
  {
    path: "/",
    key: "DASHBOARD_MAIN",
    exact: true,
    component: () => <Main />,
  },

  {
    path: "/offers",
    key: "DASHBOARD_OFFERS",
    exact: true,
    component: () => <Offers />,
  },
  {
    path: "/news",
    key: "DASHBOARD_NEWS",
    exact: true,
    component: () => <News />,
  },

  {
    path: "/webmaster",
    key: "DASHBOARD_WEBMASTER",
    exact: true,
    component: () => <Webmaster />,
  },
  {
    path: "/master/create",
    key: "DASHBOARD_MASTER",
    exact: true,
    component: () => <Master />,
  },

  {
    path: "/master/:id/edit",
    key: "DASHBOARD_MASTER_EDIT",
    exact: true,
    component: () => <Master />,
  },

  {
    path: "/production",
    key: "DASHBOARD_PRODUCTION",
    exact: true,
    component: () => <Production />,
  },

  {
    path: "/users",
    key: "DASHBOARD_USERS",
    exact: true,
    component: () => <Users />,
  },
  {
    path: "/user/create",
    key: "DASHBOARD_USERS",
    exact: true,
    component: () => <CreateUser />,
  },
  {
    path: "/user/:id/edit",
    key: "DASHBOARD_USERS",
    exact: true,
    component: () => <EditUser />,
  },

  {
    path: "/tools",
    key: "DASHBOARD_TOOLS",
    exact: true,
    component: () => <Tools />,
  },
  {
    path: "/finance",
    key: "DASHBOARD_FINANCE",
    exact: true,
    component: () => <Finance />,
  },
  {
    path: "/statistics",
    key: "DASHBOARD_STATISTICS",
    exact: true,
    component: () => <Statistics />,
  },
  {
    path: "/profile",
    key: "DASHBOARD_STATISTICS",
    exact: true,
    component: () => <Profile />,
  },
];

// call center

export const MVP_ROUTES = [
  {
    path: "/calls/",
    key: "MVP_MAIN",
    exact: true,
    component: () => <CallCenter />,
  },

  {
    path: "/calls/tasks",
    key: "MVP_TASKS",
    exact: true,
    component: () => <Tasks />,
  },
  {
    path: "/calls/appeals",
    key: "MVP_APPEALS",
    exact: true,
    component: () => <Appeals />,
  },

  {
    path: "/calls/orders",
    key: "MVP_ORDERS",
    exact: true,
    component: () => <Orders />,
  },
  {
    path: "/calls/sales",
    key: "MVP_SALES",
    exact: true,
    component: () => <Sales />,
  },

  {
    path: "/calls/clients",
    key: "MVP_CLIENTS",
    exact: true,
    component: () => <Clients />,
  },

  {
    path: "/calls/calls",
    key: "MVP_CALLS",
    exact: true,
    component: () => <Calls />,
  },

  {
    path: "/calls/mystatistics",
    key: "MVP_MY_STATISTICS",
    exact: true,
    component: () => <MyStatistics />,
  },

  {
    path: "/calls/cabinet",
    key: "MVP_CABINET",
    exact: true,
    component: () => <Cabinet />,
  },

  {
    path: "/calls/analytics",
    key: "MVP_ANALYTICS",
    exact: true,
    component: () => <Analytics />,
  },
];
