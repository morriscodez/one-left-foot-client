import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const DancerCard = ({ dancer }) => {


    return  <>
            <Card className="results__item" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dancer?.dance_user.img} />
                <Card.Body>
                    <Card.Title>
                        {`${dancer?.dance_user.user && dancer?.dance_user.user.first_name} 
                        ${dancer?.dance_user.user && dancer?.dance_user.user.last_name}`}
                    </Card.Title>
                    <Card.Text>
                        Dance: {dancer?.dance_type.label} <br></br>
                        Role: {dancer?.role.label} <br></br>
                        Skill Level: {dancer?.skill_level.label} <br></br>
                    </Card.Text>
                    <Button variant="primary" href={`./profile/${dancer?.dance_user.id}`}>View Profile</Button>
                </Card.Body>
            </Card>
            </>
}