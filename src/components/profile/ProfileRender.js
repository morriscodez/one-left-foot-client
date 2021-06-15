import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { PracticePartnerCard } from "./PracticePartnerCard"

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
            <article className="partners">
                <header>
                    <h1>Your Practice Partners</h1>
                </header>
                <section className="followers__info">
                    <header className="followers__header">
                        <h3>Followers</h3>
                    </header>
                    <div className="followers__list">
                        {profile.leader.map(follower => {
                            return <PracticePartnerCard key={follower.id} profileObj={follower} />
                        })}
                    
                    </div>
                </section>
                <section className="leaders__info">
                    <header className="leaders__header">
                        <h3>Leaders</h3>
                    </header>
                    <div className="leaders__list">
                        {profile.leader.map(leader => {
                            return <PracticePartnerCard key={leader.id} profileObj={leader} />
                        })}
                    
                    </div>
                </section>
            </article>
        </>
    )
}