import React, {Component} from "react";
import AuthComponent from "./pages/AuthComponent/AuthComponent";
import {Map} from "./pages/Map/Map";
import {ProfileWithAuth} from "./pages/Profile/Profile";
import {withAuth} from "./AuthContext";
import './App.css';

const PAGES = {
    login: (props) => <AuthComponent {...props} />,
    map: (props) => <Map {...props} />,
    profile: (props) => <ProfileWithAuth {...props} />,
}

export class App extends Component {

    state = {
        currentPage: "login"
    }

    navigateTo = (page) => {
        if (this.props.isLoggedIn) {
            this.setState({ currentPage: page })
        } else {
            this.setState({ currentPage: "login" })
        }
    }

    render() {
        const Page = PAGES[this.state.currentPage];
     return <>
         <header>
             <nav>
                 <ul>
                     <li>
                         <button onClick={() => {this.navigateTo("login")}}>
                             AuthComponent
                         </button>
                     </li>
                     <li>
                         <button onClick={() => {this.navigateTo("map")}}>
                             Map
                         </button>
                     </li>
                     <li>
                         <button onClick={() => {this.navigateTo("profile")}}>
                             Profile
                         </button>
                     </li>
                     <li>
                         <button onClick={() => {this.navigateTo("login")}}>
                             Log out
                         </button>
                     </li>
                 </ul>
             </nav>
         </header>
         <main>
             <section>
                 <Page navigateTo={this.navigateTo} />
             </section>
         </main>
     </>;
    }
}

export default withAuth(App);
