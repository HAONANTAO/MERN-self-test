import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

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
