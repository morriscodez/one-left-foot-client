import React, { useContext, useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { DanceContext } from "./DanceProvider"

export const DanceCard = ({ dance }) => {


    return <>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={profileObj.follower?.img} /> */}
            <Card.Body>
                <Card.Title>
                    {dance.dance_type?.label}
                </Card.Title>
                <Card.Text>
                    Role: {dance.role?.label}
                    Skill Level: {dance.skill_level?.label}
                </Card.Text>
                {/* <Button variant="primary" href={`./profile/${profileObj.follower?.id}`}>View Profile</Button> */}
            </Card.Body>
        </Card>
    </>
}