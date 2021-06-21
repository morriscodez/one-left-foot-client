import React, { useState, createContext } from "react"
import { authApi } from "../auth/AuthSettings"


export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

    const [profile, setProfile] = useState([])
    const [partnerProfile, setPartnerProfile] = useState([])
    

    const getProfile = () => {
        return fetch(`${authApi.localApiBaseUrl}/profile`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setProfile)
    }
    
    const getPartnerProfile = (partnerId) => {
        return fetch(`${authApi.localApiBaseUrl}/profile/${partnerId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setPartnerProfile)
    }
    
    
    
    
    const requestPractice = (receiverId) => {
        return fetch(`${authApi.localApiBaseUrl}/requests`, {
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
        return fetch(`${authApi.localApiBaseUrl}/requests/${requestId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        }).then(getProfile)
    }
    
    const acceptRequest = (requestId, followerId, leaderId) => {
        return fetch(`${authApi.localApiBaseUrl}/partners`, {
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
            return fetch(`${authApi.localApiBaseUrl}/requests/${requestId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        }).then(getProfile)        
    }

    const updateProfile = (userId, data) => {
        return fetch(`${authApi.localApiBaseUrl}/danceusers/${userId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
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