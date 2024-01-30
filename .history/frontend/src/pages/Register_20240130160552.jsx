import React from "react";
import { useState } from "react";

const [username,setUsername] = useState("")
const Register = () => {
  return (
    <>
      <div>
        <h1> username:</h1>
        <input type="text" name=" username" value=" username" />
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
