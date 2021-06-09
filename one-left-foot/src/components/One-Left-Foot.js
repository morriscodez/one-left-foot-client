import { Route, Redirect } from "react-router-dom"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
// import { userStorageKey } from "./auth/authSettings"
// import { NavBar } from "./nav/NavBar"
// import { Home } from "./Home"
// import { ApplicationViews } from "./ApplicationViews"
// import { Footer } from "./nav/Footer"

//TODO: Change sessionStorage on line 14 to getting the user token / authentication credentials
function OneLeftFoot() {
    return <>
        <Route render={() => {
            if (sessionStorage.getItem(userStorageKey)) {
                return (
                    <>
                        <Navbar />
                        <ApplicationViews />
                        <Footer />
                    </>
                )
            } else {
                return <Redirect to="/login" />;
            }
        }}>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Route>
        
    </>
}