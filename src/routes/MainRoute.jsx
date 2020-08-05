import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const MainRoutes = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
  );
};

export default MainRoutes;
