import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import ContactImage from '../../images/contact.png';

export function ContactForm() {
    const [msg, setMsg] = useState({
        reply_to: '',
        from_name: '',
        message: ''
    })

    // Function to handleChange
    const handleChange = (field, value) => {
        setMsg(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    // Function to send the got damn email
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_39i9t3z', 'template_ts0a6ib', msg, 'user_xMn5ZWR3u6FniRaV0vWip')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-image">
                <img src={ContactImage} alt="Contact Us Image" />
            </div>
            <div id="contact-form" className="form" onSubmit={handleSubmit}>
                <h3>Want to get in touch?</h3>
                <form>
                    <div className='name-email'>
                        <input onChange={(e) => handleChange("from_name", e.target.value)} type="text" placeholder="Name" id="fromName" required />
                        <input onChange={(e) => handleChange("reply_to", e.target.value)} type="email" placeholder="Email" id="fromEmail" required />
                    </div>
                    <div>
                        <textarea onChange={(e) => handleChange("message", e.target.value)} placeholder="Enter your message." id="msg" required></textarea>
                    </div>
                    <div>
                        {/* <button onClick={handleSubmit}>Let's Chat</button> */}
                        <input className="submit-btn btn" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </section>
    )
}