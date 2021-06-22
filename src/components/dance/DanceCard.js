import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { DanceContext } from "./DanceProvider"

export const DanceCard = ({ dance }) => {

    const {removeDance} = useContext(DanceContext)

    const handleRemove = (id) => {
        id=parseInt(id)
        removeDance(id)
    }

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
            <Button key={dance.id} id={dance.id} onClick={e => {
                handleRemove(e.target.id)
            }}>
                Remove Dance
            </Button>
        </Card>
    </>
}