import React, { useState } from "react";
import "../../styles/ContactForm.css"

function ContactForm(){
    const [message, setMessage] = useState({
        name: "",
        email: "",
        company: "",
        message_subject: "",
        message_contents: ""
    })

    function handleInputChange(event){
        let name = event.target.name
        let value = event.target.value
        setMessage({
            ...message,
            [name]: value
        })
    }

    function handleFormSubmit(event){
        event.preventDefault()
        // console.log(message)
        fetch('http://127.0.0.1:3000/messages',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then((response) => response.json())
        .then((messageData) => console.log(messageData))
    }

    return(
            <div className="ContactForm-container">
                <h1 className="ContactForm-title">Contact</h1>
                <form onSubmit={handleFormSubmit}>
                    <input onChange={handleInputChange} className="ContactForm-contents" id="ContactForm-names" name="name" placeholder="Name..." />
                    <input onChange={handleInputChange} className="ContactForm-contents" id="ContactForm-names" name="company" placeholder="Company..." />
                    <input onChange={handleInputChange} className="ContactForm-contents" name="email" placeholder="Email..." />
                    <input onChange={handleInputChange} className="ContactForm-contents" name="message_subject" placeholder="Message Subject..." />
                    <input onChange={handleInputChange} className="ContactForm-contents" id="ContactForm-messageContent" name="message_contents" placeholder="Message Contents..." />
                    <button className="ContactForm-button"> Submit </button>
                </form>
            </div>
    )
};

export default ContactForm