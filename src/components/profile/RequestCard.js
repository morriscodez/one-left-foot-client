import React, { useContext } from "react"
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

export const RequestCard = ({ sender }) => {

    const handleAccept = () => {

    }

    const handleDecline = () => {

    }

    return <>
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">New Request!</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>
                { sender?.user && sender.user?.first_name}
                { sender?.user && sender.user?.last_name} would like to become practice partners
            </Toast.Body>
            <Button>
                Accept
            </Button>
            <Button>
                Decline
            </Button>
        </Toast>
    </>
}