import React, {Component} from "react";
import AuthComponent from "./pages/AuthComponent/AuthComponent";
import {Map} from "./pages/Map/Map";
import {ProfileWithAuth} from "./pages/Profile/Profile";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export class App extends Component {

    render() {
     return <>
         <header>
             <nav>
                 <ul>
                     <li>
                         <Link to="/">
                             Home
                         </Link>
                     </li>
                     <li>
                         <Link to="/map">
                             Map
                         </Link>
                     </li>
                     <li>
                         <Link to="/profile">
                             Profile
                         </Link>
                     </li>
                 </ul>
             </nav>
         </header>
         <main data-testid="container">
             <section>
                 <Switch>
                     <Route exact path="/" component={AuthComponent} />
                     <PrivateRoute path="/map" component={Map} />
                     <PrivateRoute exact path="/profile" component={ProfileWithAuth} />
                 </Switch>
             </section>
         </main>
     </>;
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
