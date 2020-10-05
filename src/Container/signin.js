import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Transition, CSSTransition } from "react-transition-group";
import { signin } from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as actions from "../redux/actions";

//styles
import "./styles/signin.css";

function Signin() {
  const initialDetail = {
    name: "",
    username: "",
    password: "",
    phoneNumber: "",
  };
  const history = useHistory();
  const [detail, setDetail] = useState(initialDetail);
  const [animate, setAnimate] = useState(true);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!animate)
      setTimeout(() => {
        history.push("/login");
      }, 300);
    return clearInterval();
  }, [animate]);

  const handleSignin = () => {
    signin(detail)
      .then((data) => {
        console.log(data);
        if (data.token) {
          toast(data.message, { className: "success", type: "success" });
          dispatch(actions.setToken(data.token));
          dispatch(actions.setUser(data.user));
        } else {
          toast(data.message, { className: "error", type: "error" });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    setAnimate(false);
  };

  return (
    // <div>
    //   <h1>Signin</h1>
    //   <label htmlFor={"name"}>Name</label>
    //   <input type="text" name={"name"} onChange={clickHandler} />
    //   <label htmlFor={"username"}>Username</label>
    //   <input type="text" name={"username"} onChange={clickHandler} />
    //   <label htmlFor={"password"}>Password</label>
    //   <input type="text" name={"password"} onChange={clickHandler} />
    //   <label htmlFor={"phoneNumber"}>PhoneNumber</label>
    //   <input type="text" name={"phoneNumber"} onChange={clickHandler} />
    //   <div>
    //     <input type="submit" onClick={() => console.log(detail)}></input>
    //   </div>
    // </div>
    <>
      <CSSTransition
        // unmountOnExit
        in={animate}
        timeout={{ appear: 0, enter: 0, exit: 300 }}
        classNames="signinsideScreen"
        appear
      >
        <div className="signinscreen"></div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={animate}
        timeout={{ appear: 100, enter: 100, exit: 300 }}
        classNames="signinside"
        appear
      >
        <div className="signinleftNotice">
          <h1 className="signintitle" style={{ color: "white" }}>
            Hello Friends!
          </h1>
          <div
            className="signinsubText"
            style={{ color: "white", cursor: "default" }}
          >
            Enter your credentials and start connecting with people
          </div>
          <div
            className="signinsubText"
            style={{ color: "white", cursor: "default" }}
          >
            or
          </div>
          <div
            className="signinsubmit"
            style={{
              // color: "white",
              backgroundColor: "rgba(0,0,0,0)",
              borderWidth: 1,
              borderColor: "white",
              borderStyle: "solid",
            }}
            onClick={handleLogin}
          >
            Login In
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={animate}
        timeout={{ appear: 100, enter: 100, exit: 100 }}
        classNames="signinmain"
        appear
      >
        <div className="signin">
          <h1 className="signintitle">Sign In</h1>

          <div className="signinoAuth">
            <div className="signinicon">
              <FaFacebookF />
            </div>
            <div className="signinicon">
              <FaGooglePlusG />
            </div>
            <div className="signinicon">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="signinsmallText">or use your account</div>

          <input
            className="signinfield"
            type="text"
            name={"name"}
            onChange={clickHandler}
            placeholder="Name"
          />
          <input
            className="signinfield"
            type="text"
            name={"username"}
            onChange={clickHandler}
            placeholder="Username"
          />
          <input
            className="signinfield"
            type="password"
            name={"password"}
            onChange={clickHandler}
            placeholder="Password"
          />
          <input
            className="signinfield"
            type="text"
            name={"phoneNumber"}
            onChange={clickHandler}
            placeholder="Phone Number"
          />
          <div className="signinsubText">Forgot your password?</div>
          <div className="signinsubmit" onClick={handleSignin}>
            Sign In
          </div>
        </div>
      </CSSTransition>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Signin;
