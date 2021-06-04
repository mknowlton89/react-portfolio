import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';
import ContactImage from '../../images/contact.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ContactForm() {

    const [msg, setMsg] = useState({
        reply_to: "Name",
        from_name: "Email",
        message: "Enter Message"
    })

    const notify = () => toast.success("Success! The email is on it's way!", {
        position: "bottom-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleChange = (field, value) => {
        setMsg(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    const resetState = () => {
        setMsg(prevState => {
            return {
                ...prevState,
                reply_to: "Name",
                from_name: "Email",
                message: "Enter Message"
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_39i9t3z', 'template_ts0a6ib', msg, 'user_xMn5ZWR3u6FniRaV0vWip')
            .then((response) => {
                resetState()
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-image">
                <img src={ContactImage} alt="Contact Us" />
            </div>
            <div id="contact-form" className="form" onSubmit={handleSubmit}>
                <h3>Want to get in touch?</h3>
                <form>
                    <div className='name-email'>
                        <input onChange={(e) => handleChange("from_name", e.target.value)} type="text" placeholder={msg.from_name === "Name" ? "Name" : msg.from_name} id="fromName" required />
                        <input onChange={(e) => handleChange("reply_to", e.target.value)} type="email" placeholder={msg.reply_to === "Email" ? "Email" : msg.reply_to} id="fromEmail" required />
                    </div>
                    <div>
                        <textarea onChange={(e) => handleChange("message", e.target.value)} placeholder={msg.message === "Enter Message" ? "Enter Message" : msg.message} id="msg" required></textarea>
                    </div>
                    <div>
                        <input onClick={notify} className="submit-btn btn" type="submit" value="Send" />
                    </div>
                </form>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </section>
    )
}