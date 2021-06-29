import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { apiSettings } from "../Settings"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
// import "./Auth.css"


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`${apiSettings.baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("olf_token", res.token)
                    history.push("/profile")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    // Modal Show/Hide
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>One Left Foot</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet? Register Here!</Link>
            </section>
            <article className="modal__warning">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome to One Left Foot!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Heroku's server takes a few extra moments to wake up after going to sleep. It's pretty sleepy and shuts itself off after just 30 minutes of inactivity.
                        </p> 
                        <p>
                            Please allow 30 seconds or longer for the server to wake up after you input your login credentials. Thank you for checking out One Left Foot!
                        </p> 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </article>
        </main>
    )
}
