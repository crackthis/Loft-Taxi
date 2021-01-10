import React, {Component} from "react";
import { AuthComponentWithAuth } from "./pages/AuthComponent/AuthComponent";
import {MapConnect} from "./pages/Map/Map";
import {ProfileWithAuth} from "./pages/Profile/Profile";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import './App.css';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export class App extends Component {

    render() {
     return <>
         <main data-testid="container" className="all-sections">
             <Switch>
                 <Route exact path="/" component={AuthComponentWithAuth} />
                 <PrivateRoute path="/map" component={MapConnect} />
                 <PrivateRoute exact path="/profile" component={ProfileWithAuth} />
             </Switch>
         </main>
     </>;
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
