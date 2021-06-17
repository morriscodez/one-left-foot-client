import React, { useState, createContext } from "react"

export const DanceContext = createContext()

export const DanceProvider = (props) => {

    const [danceTypes, setDanceTypes] = useState([])
    const [userDances, setUserDances] = useState([])
    const [friendDances, setFriendDances] = useState([])
    

    const getDanceTypes = () => {
        return fetch("http://localhost:8000/dancetypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDanceTypes)
    }
    
    const getUserDances = () => {
        return fetch(`http://localhost:8000/mydances`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setUserDances)
    }
    
    const getFriendDances = (id) => {
        return fetch(`http://localhost:8000/mydances/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setFriendDances)
    }


    const addUserDance = (newDance) => {
        return fetch(`http://localhost:8000/mydances`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDance)
        })
        .then(getUserDances)
    }
    



    
    return (
        <DanceContext.Provider value={{
            danceTypes, setDanceTypes, getDanceTypes, userDances, setUserDances, getUserDances, friendDances, setFriendDances, getFriendDances, addUserDance
}}>
            {props.children}
        </DanceContext.Provider>
    )
}