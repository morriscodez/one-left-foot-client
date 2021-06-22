import React, { useContext } from "react"
import { AvailabilityContext } from './AvailabilityProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const MyAvailabilityCard = ({ window }) => {

    const { deleteAvailability } = useContext(AvailabilityContext)
    
    const handleDelete = (id) => {
        
        id = parseInt(id)
        deleteAvailability(id)
    }

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {window.day?.day}
                </Card.Title>
                <Card.Text>
                    {`From ${window?.start} to ${window?.end}`}
                </Card.Text>
                <Button variant="primary" key={window.id} id={window.id} onClick={e => {
                    handleDelete(e.target.id)
                }}>Delete Availability</Button>
            </Card.Body>
        </Card>
    </>
}