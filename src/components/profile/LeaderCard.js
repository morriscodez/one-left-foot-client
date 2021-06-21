import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const LeaderCard = ({ profileObj }) => {


    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profileObj.leader?.img} />
            <Card.Body>
                <Card.Title>
                    {profileObj.leader?.user && profileObj.leader?.user.first_name}
                    {profileObj.leader?.user && profileObj.leader?.user.last_name}
                </Card.Title>
                <Card.Text>
                    Schedule Practice: {profileObj.leader?.user.email}
                </Card.Text>
                <Button variant="primary" href={`./profile/${profileObj.leader?.id}`}>View Profile</Button>
            </Card.Body>
        </Card>
    </>
}