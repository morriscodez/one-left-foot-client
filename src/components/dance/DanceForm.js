import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { DanceContext } from './DanceProvider'
import { useForm } from "react-hook-form";
// import "./dancestyles.css";




export const DanceForm = () => {
    const { danceTypes, getDanceTypes, skillLevels, getSkillLevels, danceRoles, getDanceRoles, addUserDance } = useContext(DanceContext)
    const { register, watch, handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDanceTypes()
        getDanceRoles()
        getSkillLevels()

    }, [])

    const onSubmit = (data) => {
        // console.log("data", data)
        
        data.danceTypeId = parseInt(data.danceTypeId)
        data.roleId = parseInt(data.roleId)
        data.skillLevelId = parseInt(data.skillLevelId)
        
        // console.log("data after parse", data)

        addUserDance(data)
        history.push("/profile")
    };

    console.log(watch("danceTypeId"))

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label for="danceTypeId">Dance: </label>
                <select {...register("danceTypeId", { required: true })} name= "danceTypeId" id="danceTypeId">
                    {danceTypes?.map(type => {
                        return <option value={type.id}>{type.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label for="role">Role: </label>
                <select {...register("roleId", { required: true })} name="roleId" id="roleId">
                    {danceRoles?.map(role => {
                        return <option value={role.id}>{role.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label for="skillLevelId">Skill Level: </label>
                <select {...register("skillLevelId", { required: true })} name="skillLevelId" id="skillLevelId">
                    {skillLevels?.map(skill => {
                        return <option value={skill.id}>{skill.label}</option>
                    })}
                </select>
            </fieldset>
            
            <input type="submit" />
        </form>
    </>
}