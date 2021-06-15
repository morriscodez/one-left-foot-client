import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

    const [profile, setProfile] = useState([])
    const [friendProfiles, setFriendProfiles] = useState([])
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
        .then(setProfile)
    }

    
    return (
        <ProfileContext.Provider value={{
            profile, setProfile, getProfile, getPartnerProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}