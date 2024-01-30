import React from "react";
import axios from "axios";
const Home = () => {
  const username = window.localStorage.getItem("username");
  const UserID = window.localStorage.getItem("UserID");
  // console.log(userID);
  const logout = () => {
    // Remove "username" from localStorage
    window.localStorage.removeItem("username");
    // Remove "UserID" from localStorage
    window.localStorage.removeItem("UserID");
    // Force a page reload
    window.location.reload();
  };
  return (
    <>
      {UserID ? <h1>登陆成功,欢迎{username}</h1> : <h1>没登录</h1>}

      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Home;
