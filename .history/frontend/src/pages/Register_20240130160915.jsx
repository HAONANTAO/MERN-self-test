import React from "react";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const handleChange = ()=>{

  }
  return (
    <>
      <div>
        <h1> username:</h1>
        <input
          type="text"
          name=" username"
          value=" username"
          onChange={handleChange(ev)}
        />
      </div>
      <div>
        <h1>password:</h1>
        <input type="password" name="password" value="password" />
      </div>
      <div>
        <h1> age: </h1>
        <input type="Number" name="age " value="age " />
      </div>
      <div>
        <h1> address: </h1>
        <input type="text" name="address" value="address" />
      </div>
      <div>
        <h1> job: </h1>
        <input type="text" name="job" value="job" />
      </div>
    </>
  );
};

export default Register;
