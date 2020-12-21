import React, {Component} from "react";
import AuthComponent from "./pages/AuthComponent/AuthComponent";
import {Map} from "./pages/Map/Map";
import {ProfileWithAuth} from "./pages/Profile/Profile";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import './App.css';

const PAGES = {
    login: (props) => <AuthComponent {...props} />,
    map: (props) => <Map {...props} />,
    profile: (props) => <ProfileWithAuth {...props} />,
}

export class App extends Component {
git
    setPage = (next) => {
        this.props.setPage(next);
    }

    render() {
        const Page = PAGES[this.props.page];
     return <>
         <header>
             <nav>
                 <ul>
                     <li>
                         <button onClick={() => {this.setPage("login")}}>
                             AuthComponent
                         </button>
                     </li>
                     <li>
                         <button onClick={() => {this.setPage("map")}}>
                             Map
                         </button>
                     </li>
                     <li>
                         <button onClick={() => {this.setPage("profile")}}>
                             Profile
                         </button>
                     </li>
                 </ul>
             </nav>
         </header>
         <main data-testid="container">
             <section>
                 <Page />
             </section>
         </main>
     </>;
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
