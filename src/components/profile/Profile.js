import React, { useContext } from "react"
import { ProfileContext } from "./ProfileProvider"

export const ProfileCard = ({ profile }) => {
    const {profile, getProfile}
    
    
    return  <>
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
                    {/* TODO: update this for user's dance cards */}
                    {/* <section className="profile__registrations">
                        <header className="registrations__header">
                            <h3>Your Events</h3>
                        </header>
                        <div className="registrations">
                            {
                                profile.events.map(event => {
                                    return  <div key={event.id} className="registration">
                                                <div className="registration__game">{event.game.title}</div>
                                                <div>{event.description}</div>
                                                <div>
                                                    {event.date} @ {event.time}
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </section> */}
                </article>
            </>

    
}