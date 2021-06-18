import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { DanceContext } from '../dance/DanceProvider'
import { useForm } from "react-hook-form";
// import "./dancestyles.css";

//! THIS WAS COPIED FROM ./DANCEFORM    REPURPOSE FOR SEARCH


export const FindAPartner = () => {
    const { dancers, getDancers, danceTypes, getDanceTypes } = useContext(DanceContext)
    const { register, watch, handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDanceTypes()

    }, [])
    
    useEffect(() => {
        console.log("new dancers array", dancers)

    }, [dancers])

    // Capture dance type id value, send to server to find dancers who do that dance
    const onSubmit = (data) => {
        console.log("data", data)
        
        data.danceTypeId = parseInt(data.danceTypeId)
        console.log("data after parse", data)

        getDancers(data)
    };

    console.log(watch("danceTypeId"))

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label for="danceTypeId">Select a Dance: </label>
                <select {...register("danceTypeId", { required: true })} name= "danceTypeId" id="danceTypeId">
                    {danceTypes?.map(type => {
                        return <option value={type.id}>{type.label}</option>
                    })}
                </select>
            </fieldset>
            
            
            <input type="submit" />
        </form>
    </>
}