import React, { useState, createContext} from "react"

export const AvailabilityContext = createContext()

export const AvailabilityProvider = (props) => {
    const [availabilities, setAvailabilities] = useState([])
    const [myAvailability, setMyAvailability] = useState([])
    const [days, setDays] = useState([])

    const getAvailabilities = () => {
        return fetch("http://localhost:8000/availability", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setAvailabilities)
    }

    const getMyAvailability = () => {
        return fetch("http://localhost:8000/availability/myavailability", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setMyAvailability)
    }

    const addAvailability = (newWindow) => {
        return fetch(`http://localhost:8000/availability`, {
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
        return fetch("http://localhost:8000/days", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("olf_token")}`
            }
        })
        .then(res => res.json())
        .then(setDays)
    }

    return (
        <AvailabilityContext.Provider value={{
            availabilities, setAvailabilities, getAvailabilities, myAvailability, setMyAvailability, getMyAvailability, getDays, days
        }}>
            {props.children}
        </AvailabilityContext.Provider>
    )
}