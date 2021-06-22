import React, { useContext, useEffect} from "react"
import { useHistory} from 'react-router-dom';
import { DanceContext } from './DanceProvider'
import { useForm } from "react-hook-form";




export const DanceForm = () => {
    const { danceTypes, getDanceTypes, skillLevels, getSkillLevels, danceRoles, getDanceRoles, addUserDance } = useContext(DanceContext)
    const { register,handleSubmit } = useForm()
    
    const history = useHistory()


    useEffect(() => {
        getDanceTypes()
        getDanceRoles()
        getSkillLevels()

    }, [])

    const onSubmit = (data) => {
        
        data.danceTypeId = parseInt(data.danceTypeId)
        data.roleId = parseInt(data.roleId)
        data.skillLevelId = parseInt(data.skillLevelId)
        
        addUserDance(data).then(res => {
            if ("reason" in res) {
                alert(res.reason)
            } else {
                history.push("/profile")
            }
        })
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <fieldset>
                <label htmlFor="danceTypeId">Dance: </label>
                <select {...register("danceTypeId", { required: true })} name= "danceTypeId" id="danceTypeId">
                    {danceTypes?.map(type => {
                        return <option key={type.id} value={type.id}>{type.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label htmlFor="role">Role: </label>
                <select {...register("roleId", { required: true })} name="roleId" id="roleId">
                    {danceRoles?.map(role => {
                        return <option key={role.id} value={role.id}>{role.label}</option>
                    })}
                </select>
            </fieldset>
            
            <fieldset>
                <label htmlFor="skillLevelId">Skill Level: </label>
                <select {...register("skillLevelId", { required: true })} name="skillLevelId" id="skillLevelId">
                    {skillLevels?.map(skill => {
                        return <option key={skill.id} value={skill.id}>{skill.label}</option>
                    })}
                </select>
            </fieldset>
            
            <input type="submit" />
        </form>
    </>
}