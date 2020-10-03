import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoutes";
import UnProtectedRoute from "./Component/UnProtectedRoutes";
import Home from "./Container/home";
import Login from "./Container/login";
import Signin from "./Container/signin";
import { store } from "./common/reduxConfig";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <div className="App">
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <UnProtectedRoute exact path="/login" component={Login} />
            <UnProtectedRoute exact path="/signin" component={Signin} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* </PersistGate>*/}
    </Provider>
  );
}

export default App;
