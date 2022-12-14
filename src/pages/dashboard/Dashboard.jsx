import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./dashboard.css";

import { Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { getAuth, signOut } from "firebase/auth";

function Dashboard() {
  let navigate = useNavigate();

  return (
    <>
      <div className="dashboard">
        <Topbar />
        <div className="padding-div"></div>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
