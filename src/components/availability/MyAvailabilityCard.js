import React from "react"
import Card from 'react-bootstrap/Card'

export const MyAvailabilityCard = ({ window }) => {

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {window.day?.day}
                </Card.Title>
                <Card.Text>
                    {`From ${window?.start} to ${window?.end}`}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}