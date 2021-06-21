import React, { useState, createContext } from "react"
import { authApi } from "../auth/AuthSettings"


export const DanceContext = createContext()

export const DanceProvider = (props) => {

    const [danceTypes, setDanceTypes] = useState([])
    const [userDances, setUserDances] = useState([])
    const [friendDances, setFriendDances] = useState([])
    const [skillLevels, setSkillLevels] = useState([])
    const [danceRoles, setDanceRoles] = useState([])
    const [dancers, setDancers] = useState([])
    

    const getDanceTypes = () => {
        return fetch(`${authApi.localApiBaseUrl}/dancetypes`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDanceTypes)
    }
    
    const getUserDances = () => {
        return fetch(`${authApi.localApiBaseUrl}/mydances`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setUserDances)
    }
    
    const getFriendDances = (id) => {
        return fetch(`${authApi.localApiBaseUrl}/mydances/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setFriendDances)
    }


    const addUserDance = (newDance) => {
        return fetch(`${authApi.localApiBaseUrl}/mydances`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDance)
        })
        .then(getUserDances)
    }
    


    const getSkillLevels = () => {
        return fetch(`${authApi.localApiBaseUrl}/skilllevels`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setSkillLevels)
    }
    
    const getDanceRoles = () => {
        return fetch(`${authApi.localApiBaseUrl}/roles`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDanceRoles)
    }

    const getDancers = (danceTypeId) => {
        return fetch(`${authApi.localApiBaseUrl}/mydances?dance=${danceTypeId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDancers)
    }

    
    return (
        <DanceContext.Provider value={{
            danceTypes, setDanceTypes, getDanceTypes, userDances, setUserDances, getUserDances, friendDances, setFriendDances, getFriendDances, addUserDance, skillLevels, setSkillLevels, getSkillLevels, getDanceRoles, setDanceRoles, danceRoles, getDancers, dancers, setDancers
}}>
            {props.children}
        </DanceContext.Provider>
    )
}