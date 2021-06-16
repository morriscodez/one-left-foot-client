import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { FollowerCard } from "./FollowerCard"
import { LeaderCard } from "./LeaderCard"
import { RequestCard } from "./RequestCard"

export const ProfileRender = () => {
    
    const history = useHistory()
    const { profile, getProfile } = useContext(ProfileContext)
    

    useEffect(() => {
        getProfile()
    }, [])


    

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
                        {profile?.leader?.map(follower => {
                            return <FollowerCard key={follower.id} profileObj={follower} />
                        })}                   
                    </div>
                </section>
                <section className="leaders__info">
                    <header className="leaders__header">
                        <h3>Leaders</h3>
                    </header>
                    <div className="leaders__list">
                        {profile?.follower?.map(leader => {
                            return <LeaderCard key={leader.id} profileObj={leader} />
                        })}                    
                    </div>
                </section>
            </article>
            <article className="requests__info">
                <header className="requests__header">
                    <h3>Pending Requests</h3>
                </header>
                <section className="requests__list">
                    {profile?.requests?.map(request => {
                        return <RequestCard key={request.id} request={request} />
                    })}
                </section>
            </article>
        </>
    )
}