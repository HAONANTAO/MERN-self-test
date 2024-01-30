import React from "react";
import axios from "axios";

const Login = () => {
  return (
    <>
      <h1>User Information</h1>
      <ul>
        <div>
          <li>username</li>
          <h2></h2>
        </div>
        <div>
          <li>password</li>
          <h2></h2>
        </div>
        <div>
          <li>age</li>
          <h2></h2>
        </div>
        <div>
          <li>address</li>
          <h2></h2>
        </div>
        <div>
          <li>job</li>
          <h2>${</h2>
        </div>
      </ul>
    </>
  );
};

export default Login;
