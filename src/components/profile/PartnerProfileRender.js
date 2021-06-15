import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Button } from "react-bootstrap"

export const PartnerProfileRender = () => {
//todo: build an object that sends the sender and receiver id to requests via context
    const { partnerId } = useParams()
    const history = useHistory()
    const { profile, getPartnerProfile } = useContext(ProfileContext)


    useEffect(() => {
        getPartnerProfile(partnerId)
    }, [])
    

    const handleRequest = e => {

    }

    return (
        <>
            <article className="profile">
                <header>
                    <h1>
                        Profile
                    </h1>
                </header>
                <section className="profile__info">
                    <header className="profile__header">
                        <h3>Info</h3>
                    </header>
                    <div className="profile__name">
                        Name: {profile.user && profile.user.first_name} {profile.user && profile.user.last_name}
                    </div>
                    <div className="profile__bio">About: {profile.user && profile.bio}</div>
                    <div className="profile__img"> 
                        <img src={profile.img}>
                        </img>
                    </div>
                    <div className="request__practice">
                        <Button variant="primary" onClick={handleRequest}>Primary</Button>{' '}
                    </div>
                </section>
            </article>
        </>
    )
}