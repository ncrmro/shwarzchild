import * as React from "react";
import {Route, RouteProps, Router, Switch} from "react-router";
import Landing from "screens/App/screens/Home/screens/Landing";
import createBrowserHistory from 'history/createBrowserHistory'

// import {
//   NavLink,
//   Link,
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom'

const history = createBrowserHistory()

const routesList: Array<RouteProps> = [
    {
        path: "/",
        component: Landing,
    }
];

const Routes = () =>
    <Router history={history}>
        <Switch>
            {routesList.map((route: RouteProps, i) => (
                <Route
                    key={i}
                    exact
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    </Router>

export default Routes