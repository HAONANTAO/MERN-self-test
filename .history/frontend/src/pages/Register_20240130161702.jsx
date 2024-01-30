import React from "react";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = axios.post("http://localhost:3001/auth", {
        username,
        password,
        age,
        address,
        job,
      });
      alert("成功保存");
      window.localStorage.setItem("UserID", response.data._id);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
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
      <div>
        <h1> age: </h1>
        <input
          type="Number"
          name="age "
          value="age "
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <div>
        <h1> address: </h1>
        <input
          type="text"
          name="address"
          value="address"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>
      <div>
        <h1> job: </h1>
        <input
          type="text"
          name="job"
          value="job"
          onChange={(event) => {
            setJob(event.target.value);
          }}
        />
      </div>
    </Form>
  );
};

export default Register;
