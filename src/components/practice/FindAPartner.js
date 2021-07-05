import React, { useContext, useEffect } from "react"
import { DanceContext } from '../dance/DanceProvider'
import { useForm } from "react-hook-form";
import { DancerCard } from "./DancerCard"
import "./practice.css"


export const FindAPartner = () => {
    const { dancers, getDancers, danceTypes, getDanceTypes } = useContext(DanceContext)
    const { register, handleSubmit } = useForm()
    


    useEffect(() => {
        getDanceTypes()

    }, [])
    
    useEffect(() => {

    }, [dancers])
    
    

    // Capture dance type id value, send to server to find dancers who do that dance
    const onSubmit = (data) => {
        
        data = parseInt(data.danceTypeId)
        data != 0 ? getDancers(data) : alert("Select A Dance Before Submitting ")
    };

    return <>
        
        <article className="practice">
            <section className="practice--item practice--form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <fieldset>
                        <label htmlFor="danceTypeId"></label>
                        <select {...register("danceTypeId", { required: true })} name= "danceTypeId" id="danceTypeId">
                            <option className="practice--text" key={0} value={0}>Select A Dance</option>
                            {danceTypes?.map(type => {
                                return <option key={type.id} value={type.id}>{type.label}</option>
                            })}
                        </select>
                    </fieldset>
                    
                    
                    <input type="submit" />
                </form>
            </section>
            <section className="practice--item practice--results">

            </section>
                <div className="results__list">
                    <h3 className="practice--header">Dancers:</h3>
                    {
                        dancers.length ? 

                        dancers.map(dancer => {return <DancerCard key={dancer.id} dancer={dancer}/>}) :
                    
                        <p className="practice--text">No dancers yet. Be a trendsetter!</p>
                    }
                </div>

        </article>
        
    </>
}