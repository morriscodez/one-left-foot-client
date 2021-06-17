import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ProfileProvider } from "./profile/ProfileProvider"
import { ProfileRender } from "./profile/ProfileRender"
import { PartnerProfileRender } from "./profile/PartnerProfileRender"
import { DanceProvider } from "./dance/DanceProvider"
import { DanceForm } from "./dance/DanceForm"
import { AvailabilityProvider } from "./availability/AvailabilityProvider"

//TODO: Change Home() to the "find a practice partner!" as landing page
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            
            <AvailabilityProvider>
                <DanceProvider>
                    <ProfileProvider>
                        <Route exact path="/profile">
                            <ProfileRender />
                        </Route>
                        <Route exact path="/profile/:partnerId(\d+)">
                            <PartnerProfileRender />
                        </Route>
                        <Route exact path="/dances">
                            <DanceForm />
                        </Route>
                    </ProfileProvider>
                </DanceProvider>
            </AvailabilityProvider>
            
        </>
    )
}