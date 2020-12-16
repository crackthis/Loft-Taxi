import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [page, changePage] = React.useState("login");

    const logIn = (email, password) => {
        if(email !== "valid@email.com" || password !== "correctpassword") {
            return
        } else setIsLoggedIn(true);
    }

    const logOut = () => {
        setIsLoggedIn(false)
    }

    const setPage = (next) => {
        if(isLoggedIn) {
            changePage(next);
        } else {
            changePage("login");
        }
    }

    return(
        <AuthContext.Provider value={{ logIn, logOut, isLoggedIn, setPage, page}}>
            {children}
        </AuthContext.Provider>
    );
};

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}