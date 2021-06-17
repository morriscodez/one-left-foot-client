import React, { useState, createContext} from "react"

export const AvailabilityContext = createContext()

export const AvailabilityProvider = (props) => {
    const [availabilities, setAvailabilities] = useState([])
    const [myAvailability, setMyAvailability] = useState([])

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

    return (
        <AvailabilityContext.Provider value={{
            availabilities, setAvailabilities, getAvailabilities, myAvailability, setMyAvailability, getMyAvailability
        }}>
            {props.children}
        </AvailabilityContext.Provider>
    )
}