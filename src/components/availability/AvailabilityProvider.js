import React, { useState, createContext} from "react"
import { apiSettings, apiHeaders } from '../Settings'

export const AvailabilityContext = createContext()

export const AvailabilityProvider = (props) => {
    const [availabilities, setAvailabilities] = useState([])
    const [myAvailability, setMyAvailability] = useState([])
    const [days, setDays] = useState([])

    const getAvailabilities = () => {
        return fetch(`${apiSettings.baseUrl}/availability`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setAvailabilities)
    }

    const getMyAvailability = () => {
        return fetch(`${apiSettings.baseUrl}/availability/myavailability`, {
            headers: apiHeaders()
        })
        .then(res => res.json())
        .then(setMyAvailability)
    }

    const addAvailability = (newWindow) => {
        return fetch(`${apiSettings.baseUrl}/availability`, {
            method: "POST",
            headers: apiHeaders(),
            body: JSON.stringify(newWindow)
        })
        .then(getAvailabilities)
    }

    const getDays = () => {
        return fetch(`${apiSettings.baseUrl}/days`, {
            headers: apiHeaders()
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