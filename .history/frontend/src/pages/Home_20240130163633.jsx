import React from "react";
import axios from "axios";
const Home = () => {
  const username = window.localStorage.getItem("username");
  // console.log(userID);
  return (
    <>
      <h1>登陆成功</h1>
      <h2>欢迎用户 {username}</h2>

      <button type="button" onClick={}>Logout</button>
    </>
  );
};

export default Home;
