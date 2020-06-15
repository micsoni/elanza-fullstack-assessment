import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CareFormPage from "./pages/CareFormPage";
import OpenCareRequestsPage from "./pages/OpenCareRequestsPage";
import Menu from "./components/Navbar";
import "./style/App.css";
import logo from "./logo.png";

function App() {
  return (
    <React.Fragment>
      <img src={logo} alt="logo" className="logo mx-auto d-block" />
      <Menu />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/all-care-requests"
          component={OpenCareRequestsPage}
        />
        <Route path="/new-care-request" component={CareFormPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
