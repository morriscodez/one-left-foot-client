import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { FollowerCard } from "./FollowerCard"
import { LeaderCard } from "./LeaderCard"

export const ProfileRender = () => {

    const history = useHistory()
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])
    
    //! DELETE LATER
    useEffect(() => {
        console.log("profile fetch result", profile)
    }, [profile])

    return (
        <>
            <article className="profile">
                <header>
                    <h1>Your Profile</h1>
                </header>
                <section className="profile__info">
                    <header className="profile__header">
                        <h3>Your Info</h3>
                    </header>
                    <div className="profile__name">
                        Welcome: {profile.user && profile.user.first_name} {profile.user && profile.user.last_name}
                    </div>
                    <div className="profile__username">Username: {profile.user && profile.user.username}</div>
                    <div className="profile__bio">About you: {profile.user && profile.bio}</div>
                    <div className="profile__img">you: 
                        <img src={profile.img}>
                        </img>
                    </div>
                </section>
            </article>
        </>
    )
}