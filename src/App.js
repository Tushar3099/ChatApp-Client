import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoutes";
import UnProtectedRoute from "./Component/UnProtectedRoutes";
import Home from "./Container/home";
import Login from "./Container/login";
import Signin from "./Container/signin";
import { store, persistor } from "./common/reduxConfig";
import { PersistGate } from "redux-persist/integration/react";
import io from "socket.io-client";

function App() {
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  useEffect(() => {
    const socket = io("http://localhost:4000");
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <div className="auth">
                {/* <SlidingScreen isLeft={isLeft} /> */}
                <UnProtectedRoute exact path="/login" component={Login} />
                <UnProtectedRoute
                  exact
                  path="/signin"
                  // changeScreen={changeScreen}
                  component={Signin}
                />
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
