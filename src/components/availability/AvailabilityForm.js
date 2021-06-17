import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { AvailabilityContext } from './AvailabilityProvider'
import { useForm } from "react-hook-form";




export const AvailabilityForm = () => {
    const { days, getDays } = useContext(AvailabilityContext)
    const { register, watch, handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDays()

    }, [])

    const onSubmit = (data) => {
        console.log("data", data)
        
        data.dayId = parseInt(data.dayId)
        data.start = data.start
        data.end = data.end
        
        console.log("data after parse", data)

        // addUserDance("data after parse", data)
        // history.push("/profile")
    };

    console.log(watch("dayId"))
    console.log(watch("start"))
    console.log(watch("end"))

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label for="dayId">Day: </label>
                <select {...register("dayId", { required: true })} name= "dayId" id="dayId">
                    {days?.map(day => {
                        return <option value={day.id}>{day.day}</option>
                    })}
                </select>
            </fieldset>
            <fieldset>
                <label for="start">From: </label>
                <input type="time" {...register("start", { required: true })} ></input>
            </fieldset>
            
            <fieldset>
                <label for="end">Until: </label>
                <input type="time" {...register("end", { required: true })} ></input>
            </fieldset>
            
            <input type="submit" />
        </form>
    </>
}