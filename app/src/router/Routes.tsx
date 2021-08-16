import {FC} from "react";
import {Route, Switch} from "react-router-dom";

import {ROUTES} from "./routeNames";

import LoginContainer from "../pages/LoginPage/containers/LoginContainer";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={() => <div>Hello</div>} />
      <Route path={ROUTES.LOGIN} component={LoginContainer} />
    </Switch>
  );
};

export default Routes;
