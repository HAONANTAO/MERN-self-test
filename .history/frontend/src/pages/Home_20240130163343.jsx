import React from "react";
import axios from "axios";
const Home = () => {
  const userID = window.localStorage.getItem("userID");
  return (
    <>
      {userID?<h1>登陆成功</h1>:}
    </>
  );
};

export default Home;
