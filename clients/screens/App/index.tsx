import * as React from "react";
import Navbar from "./components/Navbar/index";
// import {
//   NavLink,
//   Link,
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom'

class App extends React.Component<any, any> {
    render() {
        return <React.Fragment>
            <Navbar />
        </React.Fragment>;
    }
}

export default App;