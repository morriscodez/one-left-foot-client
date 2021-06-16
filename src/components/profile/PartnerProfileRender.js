import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Button } from "react-bootstrap"

export const PartnerProfileRender = () => {
//todo: build an object that sends the sender and receiver id to requests via context
    const { partnerId } = useParams()
    const history = useHistory()
    const { partnerProfile, getPartnerProfile, requestPractice } = useContext(ProfileContext)


    useEffect(() => {
        getPartnerProfile(partnerId)
    }, [])
    

    const handleRequest = id => {
        requestPractice(id)
        console.log("request click", id)
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
                        Name: {partnerProfile.user && partnerProfile.user.first_name} {partnerProfile.user && partnerProfile.user.last_name}
                    </div>
                    <div className="profile__bio">About: {partnerProfile.user && partnerProfile.bio}</div>
                    <div className="profile__img"> 
                        <img src={partnerProfile.img}>
                        </img>
                    </div>
                    <div className="request__practice">
                        <Button variant="primary" id={partnerId} onClick={e => {
                            handleRequest(e.target.id)
                        }}>Request Practice</Button>{' '}
                    </div>
                </section>
            </article>
        </>
    )
}