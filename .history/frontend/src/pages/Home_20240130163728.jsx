import React from "react";
import axios from "axios";
const Home = () => {
  const username = window.localStorage.getItem("username");
  const UserID = window.localStorage.getItem("UserID");
  // console.log(userID);
  const logout = () => {
    window.localStorage.removeItem("username", "UserID");
  };
  return (
    <>
      {UserID?:}
      <h1>登陆成功</h1>
      <h2>欢迎用户 {username}</h2>

      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Home;
