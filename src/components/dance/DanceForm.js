import { getRoles } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { DanceContext } from './DanceProvider'
import { useForm } from "react-hook-form";




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
        console.log(data)
        
        const newDance = {
            "danceTypeId":data.danceTypeId,
            "roleId": data.roleId,
            "skillLevelId": data.skillLevelId
        }

        addUserDance(newDance)
        // history.push("/profile")
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label for="danceTypeId">Dance: </label>
                <select ref={register} name= "danceTypeId" id="danceTypeId">
                    {danceTypes?.map(type => {
                        return <option value={type.label}>{type.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label for="role">Role: </label>
                <select ref={register} name="roleId" id="roleId">
                    {danceRoles?.map(role => {
                        return <option value={role.label}>{role.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label for="skill_level">Skill Level: </label>
                <select ref={register} name="skillLevelId" id="skillLevelId">
                    {skillLevels?.map(skill => {
                        return <option value={skill.label}>{skill.label}</option>
                    })}
                </select>
            </fieldset>
            
            <input type="submit" />
        </form>
    </>
}