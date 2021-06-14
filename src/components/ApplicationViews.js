import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ProfileProvider } from "./profile/ProfileProvider"
import { ProfileRender } from "./profile/ProfileRender"

//TODO: Change Home() to the "find a practice partner!" as landing page
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <ProfileProvider>
                <ProfileRender />
            </ProfileProvider>
            
        </>
    )
}