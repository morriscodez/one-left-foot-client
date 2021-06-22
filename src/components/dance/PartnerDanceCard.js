import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const PartnerDanceCard = ({ dance }) => {

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {dance.dance_type?.label}
                </Card.Title>
                <Card.Text>
                    Role: {dance.role?.label}
                    Skill Level: {dance.skill_level?.label}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}