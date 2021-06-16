import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { ProfileContext } from "./ProfileProvider"

export const RequestCard = ({ request }) => {

    const { declineRequest } = useContext(ProfileContext)

    const handleAccept = () => {

    }

    const handleDecline = (senderId) => {
        declineRequest(senderId)
    }

    return <>
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">New Request!</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>
                { request.sender?.user && request.sender?.user?.first_name}
                { request.sender?.user && request.sender?.user?.last_name} would like to become practice partners
            </Toast.Body>
            <Button>
                Accept
            </Button>
            <Button id={request.id} onClick={(e) => {
                handleDecline(e.target.id)
                console.log("e", e.target.id)  
            }}>
                Decline
            </Button>
        </Toast>
    </>
}