import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
        age,
        address,
        job,
      });
      alert("成功保存");
      window.localStorage.setItem("UserID", response.data._id);
      window.localStorage.setItem("username", response.data.username);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <h1> username:</h1>
        <input
          type="text"
          name=" username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div>
        <h1>password:</h1>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
