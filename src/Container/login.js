import React, { useState } from "react";
import { useSelector } from "react-redux";

function Login() {
  const initialDetail = {
    username: "",
    password: "",
  };
  const [detail, setDetail] = useState(initialDetail);
  const user = useSelector((state) => state.user);

  console.log("user", user);
  const clickHandler = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login</h1>
      <label htmlFor={"username"}>Username</label>
      <input type="text" name={"username"} onChange={clickHandler} />
      <label htmlFor={"password"}>Password</label>
      <input type="text" name={"password"} onChange={clickHandler} />
      <div>
        <input type="submit" onClick={() => console.log(detail)}></input>
      </div>
    </div>
  );
}

export default Login;
