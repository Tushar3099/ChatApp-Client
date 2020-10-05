import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Transition, CSSTransition } from "react-transition-group";
import { login } from "../services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as actions from "../redux/actions";

//styles
import "./styles/login.css";

function Login(props) {
  const initialDetail = {
    username: "",
    password: "",
  };
  const history = useHistory();
  const [detail, setDetail] = useState(initialDetail);
  const user = useSelector((state) => state.user);
  const [animate, setAnimate] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animate)
      setTimeout(() => {
        history.push("/signin");
      }, 300);
    return clearInterval();
  }, [animate]);
  // console.log("user", user);
  const clickHandler = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    login(detail)
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

  const handleSignin = () => {
    setAnimate(false);
  };

  return (
    <>
      <CSSTransition
        // unmountOnExit
        in={animate}
        timeout={{ appear: 0, enter: 0, exit: 300 }}
        classNames="sideScreen"
        appear
      >
        <div className="screen"></div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={animate}
        timeout={{ appear: 100, enter: 100, exit: 300 }}
        classNames="side"
        appear
      >
        <div className="leftNotice">
          <h1 className="title" style={{ color: "white" }}>
            Welcome Back !
          </h1>
          <div
            className="subText"
            style={{ color: "white", cursor: "default" }}
          >
            To keep connected with your peers please login with your credentials
          </div>
          <div
            className="subText"
            style={{ color: "white", cursor: "default" }}
          >
            or
          </div>
          <div
            className="submit"
            style={{
              // color: "white",
              backgroundColor: "rgba(0,0,0,0)",
              borderWidth: 1,
              borderColor: "white",
              borderStyle: "solid",
            }}
            onClick={handleSignin}
          >
            Sign In
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={animate}
        timeout={{ appear: 100, enter: 100, exit: 300 }}
        classNames="main"
        appear
      >
        <div className="login">
          <h1 className="title">Login</h1>

          <div className="oAuth">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaGooglePlusG />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="smallText">or use your account</div>

          <input
            className="field"
            type="text"
            name={"username"}
            onChange={clickHandler}
            placeholder="Username"
          />
          <input
            className="field"
            type="password"
            name={"password"}
            onChange={clickHandler}
            placeholder="Password"
          />
          <div className="subText">Forgot your password?</div>
          <div className="submit" onClick={handleLogin}>
            Log In
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

export default Login;
