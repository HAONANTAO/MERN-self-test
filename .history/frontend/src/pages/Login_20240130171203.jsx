import React from "react";
import axios from "axios";

export const Login = () => {
  return (
    <>
      <h1>User Information</h1>
      <ul>
        <div>
          <li>username</li>
          <h2>${username}</h2>
        </div>
        <div>
          <li>password</li>
          <h2>${password}</h2>
        </div>
        <div>
          <li>age</li>
          <h2>${age}</h2>
        </div>
        <div>
          <li>address</li>
          <h2>${address}</h2>
        </div>
        <div>
          <li>job</li>
          <h2>${job}</h2>
        </div>
      </ul>
    </>
  );
};

export default Login;
