import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Users from "../src/users/pages/Users";
import NewPlace from "../src/places/pages/NewPlace";
import MainNavigation from "../src/shared/components/Navigation/MainNavigation";
import UserPlaces from "../src/places/pages/UserPlaces";
import Auth from "./users/pages/Auth";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces/>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route>
            <Auth path="/auth" exact/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
