import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoutes";
import UnProtectedRoute from "./Component/UnProtectedRoutes";
import SlidingScreen from "./Component/SlidingScreen";
import Home from "./Container/home";
import Login from "./Container/login";
import Signin from "./Container/signin";
import { store, persistor } from "./common/reduxConfig";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [isLeft, setIsLeft] = useState(true);

  const changeScreen = (boolValue) => {
    setIsLeft(boolValue);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <div className="auth">
                {/* <SlidingScreen isLeft={isLeft} /> */}
                <UnProtectedRoute
                  exact
                  path="/login"
                  changeScreen={changeScreen}
                  component={Login}
                />
                <UnProtectedRoute
                  exact
                  path="/signin"
                  changeScreen={changeScreen}
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
