import React, { useContext, useEffect} from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"
import { Button } from "react-bootstrap"
import { DanceContext } from "../dance/DanceProvider"
import { DanceCard } from "../dance/DanceCard"
import { MyAvailabilityCard } from "../availability/MyAvailabilityCard"

export const PartnerProfileRender = () => {
    const { partnerId } = useParams()
    const { partnerProfile, getPartnerProfile, requestPractice, removePartner } = useContext(ProfileContext)

    const { friendDances, getFriendDances } = useContext(DanceContext)

    const disabledButton = true
    
    useEffect(() => {
        getPartnerProfile(partnerId)
        getFriendDances(partnerId)
    }, [])
    
    const handleRequest = id => {
        requestPractice(id)
    }

    const handleRemove = id => {   
        id = parseInt(id)
        removePartner(id)        
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
                        <img src={partnerProfile.img} alt="profile">
                        </img>
                    </div>
                    {
                        partnerProfile.pending_request ?

                        <div className="request__pending">
                            <Button variant="primary" disabled={disabledButton} id={partnerProfile?.id}
                                >Request Pending</Button>{' '}
                        </div>

                    :
                        
                        partnerProfile.already_follower ? 

                    <div className="request__practice">
                        <Button variant="primary" id={partnerProfile?.id} onClick={e => {
                            handleRemove(e.target.id)
                        }}>Remove From Practice Partners</Button>{' '}
                    </div>
                    
                    :
                    
                    partnerProfile.already_leader ?

                    <div className="request__practice">
                        <Button variant="primary" id={partnerProfile?.id} onClick={e => {
                            handleRemove(e.target.id)
                        }}>Remove From Practice Partners</Button>{' '}
                    </div>

                    :
                    
                    <div className="request__practice">
                        <Button variant="primary" id={partnerId} onClick={e => {
                            handleRequest(e.target.id)
                        }}>Request Practice</Button>{' '}
                    </div>
                }
                    
                    <article className="dances__info">
                        <header className="dances__header">
                            <h3>Dances</h3>
                        </header>
                        <section className="requests__list">
                            {friendDances?.map(dance => {
                                return <DanceCard key={dance.dance_type.id} dance={dance} />
                            })}
                        </section>
                    </article>
                    <article className="availability__info">
                        <header className="availability__header">
                            <h3>Availability</h3>
                        </header>
                        <section className="availability__list">
                            {partnerProfile.availability_set?.map(window => {
                                return <MyAvailabilityCard key={window.id} window={window} />
                            })}
                        </section>
                    </article>
                </section>
            </article>
        </>
    )
}