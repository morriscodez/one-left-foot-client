import React, { useState, createContext } from "react"
import { apiSettings, apiHeaders } from '../Settings'



export const DanceContext = createContext()

export const DanceProvider = (props) => {

    const [danceTypes, setDanceTypes] = useState([])
    const [userDances, setUserDances] = useState([])
    const [friendDances, setFriendDances] = useState([])
    const [skillLevels, setSkillLevels] = useState([])
    const [danceRoles, setDanceRoles] = useState([])
    const [dancers, setDancers] = useState([])
    

    const getDanceTypes = () => {
        return fetch(`${apiSettings.baseUrl}/dancetypes`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setDanceTypes)
    }
    
    const getUserDances = () => {
        return fetch(`${apiSettings.baseUrl}/mydances`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setUserDances)
    }
    
    const getFriendDances = (id) => {
        return fetch(`${apiSettings.baseUrl}/mydances/${id}`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setFriendDances)
    }


    const addUserDance = (newDance) => {
        return fetch(`${apiSettings.baseUrl}/mydances`, {
            method: "POST",
            headers: apiHeaders(),
            body: JSON.stringify(newDance)
        })
        .then(res => res.json())
    }
    


    const getSkillLevels = () => {
        return fetch(`${apiSettings.baseUrl}/skilllevels`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setSkillLevels)
    }
    
    const getDanceRoles = () => {
        return fetch(`${apiSettings.baseUrl}/roles`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setDanceRoles)
    }

    const getDancers = (danceTypeId) => {
        return fetch(`${apiSettings.baseUrl}/mydances?dance=${danceTypeId}`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setDancers)
    }

    const removeDance = (danceTypeId) => {
        return fetch(`${apiSettings.baseUrl}/mydances/${danceTypeId}`, {
            method: "DELETE",
            headers: apiHeaders()
        }).then(getUserDances)
    }

    
    return (
        <DanceContext.Provider value={{
            danceTypes, setDanceTypes, getDanceTypes, userDances, setUserDances, getUserDances, friendDances, setFriendDances, getFriendDances, addUserDance, skillLevels, setSkillLevels, getSkillLevels, getDanceRoles, setDanceRoles, danceRoles, getDancers, dancers, setDancers, removeDance
}}>
            {props.children}
        </DanceContext.Provider>
    )
}