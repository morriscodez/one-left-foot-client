import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const MyAvailabilityCard = ({ window }) => {

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
            </Card.Body>
        </Card>
    </>
}