import React, { useContext, useState } from "react"
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { ProfileContext } from "./ProfileProvider"

export const RequestCard = ({ request }) => {

    const { declineRequest, acceptRequest } = useContext(ProfileContext)
    const senderId = parseInt(request.sender?.id)
    const receiverId = parseInt(request?.receiver)

    const [showToast, setShowToast] = useState(true)
    const toggleShowToast = () => setShowToast(!showToast);

    const handleAccept = (requestId, followerId, leaderId) => {
        
        acceptRequest(requestId, followerId, leaderId)
    }

    const handleDecline = (senderId) => {
        declineRequest(senderId)
    }

    return <>
        <Toast show={showToast} onClose={toggleShowToast}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">New Request!</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>
                { request.sender?.user && request.sender?.user?.first_name}
                { request.sender?.user && request.sender?.user?.last_name} would like to become practice partners
            </Toast.Body>
            <Button  id={request.id} onClick={(e) => {
                handleAccept(e.target.id, senderId, receiverId)
            }}>
                Accept as Leader
            </Button>
            <Button  id={request.id} onClick={(e) => {
                handleAccept(e.target.id, receiverId, senderId)
            }}>
                Accept as Follower
            </Button>
            <Button id={request.id} onClick={(e) => {
                
                handleDecline(e.target.id)
            }}>
                Decline
            </Button>
        </Toast>
    </>
}