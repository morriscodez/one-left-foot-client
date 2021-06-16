import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

    const [profile, setProfile] = useState([])
    const [partnerProfile, setPartnerProfile] = useState([])
    const requests = []

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setProfile)
    }
    
    const getPartnerProfile = (partnerId) => {
        return fetch(`http://localhost:8000/profile/${partnerId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setPartnerProfile)
    }
    
    
    
    
    const requestPractice = (receiverId) => {
        return fetch(`http://localhost:8000/requests`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "receiverId": receiverId
                })
        }).then(getProfile)
    }
    
    const declineRequest = (requestId) => {
        return fetch(`http://localhost:8000/requests/${requestId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        }).then(getProfile)
    }
    
    const acceptRequest = (requestId, followerId, leaderId) => {
        return fetch(`http://localhost:8000/partners`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "leaderId": leaderId,
                    "followerId": followerId
                }
            )
        }).then(() => {
            return fetch(`http://localhost:8000/requests/${requestId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        }).then(getProfile)        
    }



    
    return (
        <ProfileContext.Provider value={{
            profile, setProfile, getProfile, declineRequest, acceptRequest, partnerProfile, setPartnerProfile, getPartnerProfile, requestPractice
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}