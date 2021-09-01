import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from "../../hooks/useAuth";

import { General } from "./App.Routing.General";
import { Demos } from "./App.Routing.Demos";
import { Auth } from "./App.Routing.Auth";
import { Create } from "./App.Routing.Create";
import { Sync } from "./App.Routing.Sync";
import { Items } from "./App.Routing.Items";
import { User } from "./App.Routing.User";

export const Routing = () => {
  const { louding, User } = useContext(authContext);

  if (loading) {
    return null;
  }
  return (
    <Switch>
      <Route path="/demo">
        <Demos />
      </Route>

      <Route path="/user"> {User ? <User /> : <Redirect to="/" />}
      </Route>

      <Route path="/items"> {User ? <Items /> : <Redirect to ="/" />}
      </Route>

      <Route path="/sync"> {User ? <Sync /> : <Redirect to="/" />}
      </Route>

      <Route path="/auth"> {User ? <Redirect to="/sync/check" /> : <Auth />}
      </Route>

      <Route path="/create"> { User ? <Redirect to="/sync/check" /> : <Create />}
      </Route>

     
        <General user={User} />
    
    </Switch>
  );
};

export default Routing
