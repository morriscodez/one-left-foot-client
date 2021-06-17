import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const AvailabilityCard = ({ window }) => {

    return <>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={profileObj.follower?.img} /> */}
            <Card.Body>
                <Card.Title>
                    {window.day?.day}
                </Card.Title>
                <Card.Text>
                    {`From ${window?.start} to ${window?.end}`}
                </Card.Text>
                <Button variant="primary" href={`./profile/${window.dance_user?.id}`}>View Profile</Button>
            </Card.Body>
        </Card>
    </>
}