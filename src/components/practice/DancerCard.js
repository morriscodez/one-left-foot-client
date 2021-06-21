import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const DancerCard = ({ dancer }) => {


    return  <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dancer?.dance_user.img} />
                <Card.Body>
                    <Card.Title>
                        {`${dancer?.dance_user.user && dancer?.dance_user.user.first_name} 
                        ${dancer?.dance_user.user && dancer?.dance_user.user.last_name}`}
                        <hr></hr>
                    </Card.Title>
                    <Card.Text>
                        <p>{dancer?.dance_type.label}</p>
                        <p>{dancer?.role.label}</p>
                        <p>{dancer?.skill_level.label}</p>
                        <hr></hr>
                    </Card.Text>
                    <Button variant="primary" href={`./profile/${dancer?.dance_user.id}`}>View Profile</Button>
                </Card.Body>
            </Card>
            </>
}