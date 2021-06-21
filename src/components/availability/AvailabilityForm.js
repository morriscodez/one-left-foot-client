import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { AvailabilityContext } from './AvailabilityProvider'
import { useForm } from "react-hook-form";




export const AvailabilityForm = () => {
    const { days, getDays, addAvailability } = useContext(AvailabilityContext)
    const { register, watch, handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDays()

    }, [])

    const onSubmit = (data) => {
        
        data.dayId = parseInt(data.dayId)
        data.start = data.start
        data.end = data.end
        

        addAvailability(data)
        history.push("/profile")
    };



    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label htmlFor="dayId">Day: </label>
                <select {...register("dayId", { required: true })} name= "dayId" id="dayId">
                    {days?.map(day => {
                        return <option key={day.id} value={day.id}>{day.day}</option>
                    })}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="start">From: </label>
                <input type="time" {...register("start", { required: true })} ></input>
            </fieldset>
            
            <fieldset>
                <label htmlFor="end">Until: </label>
                <input type="time" {...register("end", { required: true })} ></input>
            </fieldset>
            
            <input type="submit" />
        </form>
    </>
}