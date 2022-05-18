import {
  EventNote,
  NotificationsNone,
  PersonOutline,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../scss/components/Home/User.scss";
const User = () => {
  const [heading, setHeading] = useState("My Profile");
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("Avatar from localstorage", avatar.imageUrl);
  return (
    <div className="grid wide">
      <div className="row user-container">
        <div className="col-2">
          <div className="user-heading">
            <img
              src={user.user?.image || `/images/avatar-anonymous-300x300.png`}
              alt=""
              className="user-heading-img"
            />
            <h4 className="user-heading-name">{user.user?.name}</h4>
          </div>
          <hr />
          <div className="user-functions">
            <ul className="list-functions">
              <li className="list-functions-item">
                <Link
                  to="profile"
                  className="list-functions-item-link"
                  onClick={() => setHeading("My Profile")}
                >
                  <PersonOutline color="primary" />
                  <span>Tài khoản của tôi</span>
                </Link>
              </li>
              <li className="list-functions-item">
                <Link
                  to="purchase"
                  className="list-functions-item-link"
                  onClick={() => setHeading("My Purchase")}
                >
                  <EventNote color="primary" />
                  <span>Đơn mua</span>
                </Link>
              </li>
              <li className="list-functions-item">
                <Link
                  to="notifications"
                  className="list-functions-item-link"
                  onClick={() => setHeading("Notifications")}
                >
                  <NotificationsNone color="primary" />
                  <span>Thông báo</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10">
          <div className="main-information">
            <div className="main-information-heading">
              <h4>{heading}</h4>
            </div>
            <hr />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
