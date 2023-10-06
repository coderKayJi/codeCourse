import { notification } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Request from "../request";
import { LogoutOutlined } from "@ant-design/icons";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => ({
    currentUser: state.global.currentUser,
  }));
  const headerStyle = {
    backgroundColor: "rgb(42, 118, 172)",
    color: "#fff",
    padding: "10px 0",
    zIndex: 2,
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const mediaQueryStyle = {
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  };
  const logout = async (id) => {
    let { user, token, success, msg, data } = await Request.logout({
      emailid: id,
    });
    if (success) {
      dispatch({ type: "LOGOUT" });
      notification.success({
        message: msg,
      });
    } else {
      notification.error({
        message: msg || "Failed",
      });
    }
  };
  return (
    <header style={headerStyle}>
      <nav style={{ ...navStyle, ...mediaQueryStyle }}>COURSE APP.</nav>
      <div style={{ float: "right", paddingRight: "1rem" }}>
        {currentUser?.name}{" "}
        <LogoutOutlined
          onClick={() => {
            logout(currentUser?.emailid);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
