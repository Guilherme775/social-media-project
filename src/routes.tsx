import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login, Register, Social } from "./pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/feed/:id" component={Social} />
      </Switch>
    </BrowserRouter>
  );
};
