import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { AvailabilityContext } from './AvailabilityProvider'
import { useForm } from "react-hook-form";
import "./Availability.css"




export const AvailabilityForm = () => {
    const { days, getDays, addAvailability } = useContext(AvailabilityContext)
    const { register, handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDays()

    }, [])

    const onSubmit = (data) => {
        
        data.dayId = parseInt(data.dayId)   

        addAvailability(data).then(res => {
            if ("reason" in res){
                alert(res.reason)
            } else {
                history.push("/profile")
            }
        })
    };



    return <>
        <article className="availability__form">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <fieldset className="availability__form--item">
                    <label htmlFor="dayId">Day: </label>
                    <select {...register("dayId", { required: true })} name= "dayId" id="dayId">
                        {days?.map(day => {
                            return <option key={day.id} value={day.id}>{day.day}</option>
                        })}
                    </select>
                </fieldset>
                <fieldset className="availability__form--item">
                    <label htmlFor="start">From: </label>
                    <input type="time" {...register("start", { required: true })} ></input>
                </fieldset>
                
                <fieldset className="availability__form--item">
                    <label htmlFor="end">Until: </label>
                    <input type="time" {...register("end", { required: true })} ></input>
                </fieldset>
                
                <input type="submit" />
            </form>
        </article>
        
    </>
}