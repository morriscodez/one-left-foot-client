import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/login"
import { Register } from "./auth/register"
// import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"
// import { Home } from "./Home"
// import { ApplicationViews } from "./ApplicationViews"
import { Footer } from "./nav/Footer"
import { ApplicationViews } from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css';

export function OneLeftFoot() {
    return <>
        <Route render={() => {
            if (localStorage.getItem('olf_token')) {
                return (
                    <>
                        <NavBar />
                        <ApplicationViews />
                        <Footer />
                    </>
                )
            } else {
                return <Redirect to="/login" />;
            }
                            }} />
            
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            
        
    </>
}