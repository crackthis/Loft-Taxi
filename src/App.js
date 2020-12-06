import React from "react";
import {Login} from "./pages/Login/Login";
import {Home} from "./pages/About/Home";
import {Profile} from "./pages/Profile/Profile";
import './App.css';

const PAGES = {
    login: <Login />,
    home: <Home />,
    profile: <Profile />,
}

class App extends React.Component {

    state = { currentPage: "login" }

    navigateTo = (page) => {
        this.setState({ currentPage: page })
    }

    render() {
     return <>
         {/*<header>*/}
         {/*    <nav>*/}
         {/*        <ul>*/}
         {/*            <li>*/}
         {/*                <button onClick={() => {this.navigateTo("login")}}>*/}
         {/*                    Login*/}
         {/*                </button>*/}
         {/*            </li>*/}
         {/*            <li>*/}
         {/*                <button onClick={() => {this.navigateTo("home")}}>*/}
         {/*                    Home*/}
         {/*                </button>*/}
         {/*            </li>*/}
         {/*            <li>*/}
         {/*                <button onClick={() => {this.navigateTo("profile")}}>*/}
         {/*                    Profile*/}
         {/*                </button>*/}
         {/*            </li>*/}
         {/*            <li>*/}
         {/*                <button onClick={() => {this.navigateTo("login")}}>*/}
         {/*                    Log out*/}
         {/*                </button>*/}
         {/*            </li>*/}
         {/*        </ul>*/}
         {/*    </nav>*/}
         {/*</header>*/}
         <main>
             <section>
                 {PAGES[this.state.currentPage]}
             </section>
         </main>
     </>;
    }
}

export default App;
