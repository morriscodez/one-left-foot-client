import React, { useState, createContext} from "react"
import { authApi } from "../auth/AuthSettings"

export const AvailabilityContext = createContext()

export const AvailabilityProvider = (props) => {
    const [availabilities, setAvailabilities] = useState([])
    const [myAvailability, setMyAvailability] = useState([])
    const [days, setDays] = useState([])

    const getAvailabilities = () => {
        return fetch(`${authApi.localApiBaseUrl}/availability`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setAvailabilities)
    }

    const getMyAvailability = () => {
        return fetch(`${authApi.localApiBaseUrl}/availability/myavailability`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setMyAvailability)
    }

    const addAvailability = (newWindow) => {
        return fetch(`${authApi.localApiBaseUrl}/availability`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newWindow)
        })
        .then(getAvailabilities)
    }

    const getDays = () => {
        return fetch(`${authApi.localApiBaseUrl}/days`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDays)
    }

    return (
        <AvailabilityContext.Provider value={{
            availabilities, setAvailabilities, getAvailabilities, myAvailability, setMyAvailability, getMyAvailability, getDays, days, addAvailability
        }}>
            {props.children}
        </AvailabilityContext.Provider>
    )
}