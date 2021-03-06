import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const FollowerCard = ({ profileObj }) => {


  return <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profileObj.follower?.img} />
            <Card.Body>
              <Card.Title>
                { profileObj.follower?.user && profileObj.follower?.user.first_name } 
                { profileObj.follower?.user && profileObj.follower?.user.last_name }
              </Card.Title>
              <Card.Text>
                Schedule Practice: {profileObj.follower?.user.email}
              </Card.Text>
              <Button variant="primary" href={`./profile/${profileObj.follower?.id}`}>View Profile</Button>
            </Card.Body>
          </Card>
        </>
}