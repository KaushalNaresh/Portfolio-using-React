import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You will need a server-side service to handle emails
        console.log(formData);
        alert('Form submitted. Check the console for form data.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-me">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;
