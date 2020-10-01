import React, { useState } from "react";

function Signin() {
  const initialDetail = {
    name: "",
    username: "",
    password: "",
    phoneNumber: "",
  };
  const [detail, setDetail] = useState(initialDetail);

  const clickHandler = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Signin</h1>
      <label htmlFor={"name"}>Name</label>
      <input type="text" name={"name"} onChange={clickHandler} />
      <label htmlFor={"username"}>Username</label>
      <input type="text" name={"username"} onChange={clickHandler} />
      <label htmlFor={"password"}>Password</label>
      <input type="text" name={"password"} onChange={clickHandler} />
      <label htmlFor={"phoneNumber"}>PhoneNumber</label>
      <input type="text" name={"phoneNumber"} onChange={clickHandler} />
      <div>
        <input type="submit" onClick={() => console.log(detail)}></input>
      </div>
    </div>
  );
}

export default Signin;
