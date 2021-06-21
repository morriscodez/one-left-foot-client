import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'


export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

    const [profile, setProfile] = useState([])
    const [partnerProfile, setPartnerProfile] = useState([])
    

    const getProfile = () => {
        return fetch(`${apiSettings.baseUrl}/profile`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setProfile)
    }
    
    const getPartnerProfile = (partnerId) => {
        return fetch(`${apiSettings.baseUrl}/profile/${partnerId}`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setPartnerProfile)
    }
    
    
    
    
    const requestPractice = (receiverId) => {
        return fetch(`${apiSettings.baseUrl}/requests`, {
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
        return fetch(`${apiSettings.baseUrl}/requests/${requestId}`, {
            method: "DELETE",
            headers: apiHeaders()
        }).then(getProfile)
    }
    
    const acceptRequest = (requestId, followerId, leaderId) => {
        return fetch(`${apiSettings.baseUrl}/partners`, {
            method: "POST",
            headers: apiHeaders(),
            body: JSON.stringify(
                {
                    "leaderId": leaderId,
                    "followerId": followerId
                }
            )
        }).then(() => {
            return fetch(`${apiSettings.baseUrl}/requests/${requestId}`, {
            method: "DELETE",
            headers: apiHeaders()
        })
        }).then(getProfile)        
    }

    const updateProfile = (userId, data) => {
        return fetch(`${apiSettings.baseUrl}/danceusers/${userId}`, {
            method: "PUT",
            headers: apiHeaders(),
            body: JSON.stringify(data)
        }).then(getProfile)
    }

    
    return (
        <ProfileContext.Provider value={{
            profile, setProfile, getProfile, declineRequest, acceptRequest, partnerProfile, setPartnerProfile, getPartnerProfile, requestPractice, updateProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}