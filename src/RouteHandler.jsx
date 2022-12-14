import React, { useState } from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Discussions from "./pages/discussions/Discussions";
import People from "./pages/people/People";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import Edit from "./pages/edit/Edit";
import PrivateRoute from "./PrivateRoute";
import Test from "./test";
import PostPage from "./pages/postPage/PostPage";
import ProfileOther from "./pages/profileOther/ProfileOther";

import { HashRouter, Routes, Route } from "react-router-dom";

export default function RouteHandler() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="myProfile" element={<Profile />} />
          <Route path="people" element={<People />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="edit" element={<Edit />} />
          <Route path="postpage/:id" element={<PostPage />} />
          <Route path="profile/:id" element={<ProfileOther />} />
        </Route>
        <Route path="test" element={<Test />} />
      </Routes>
    </HashRouter>
  );
}
