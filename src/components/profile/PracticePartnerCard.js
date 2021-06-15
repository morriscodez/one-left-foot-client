import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const PracticePartnerCard = ({ profileObj }) => {


  return <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profileObj.follower?.img} />
            <Card.Body>
              <Card.Title>
                { profileObj.follower?.user && profileObj.follower?.user.first_name } 
                { profileObj.follower?.user && profileObj.follower?.user.last_name }
              </Card.Title>
              <Card.Text>
                Contact: {profileObj.follower?.user.email}
              </Card.Text>
              <Button variant="primary" href={`./profile/${profileObj.follower?.user.first_name}`}>View Profile</Button>
            </Card.Body>
          </Card>
        </>
}