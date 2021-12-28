import React, { useRef, useState } from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import emailjs from 'emailjs-com';
import '../styles/Contact.scss';

export default function Contact() {

    const form = useRef();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    function handleInputs(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_rvoh1zs', 'template_jg6hj1a', form.current, 'user_WxPNda96LxtOcDZvrzf5E')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // for (let i = 0; i < form.current.length; i++) {
        //     form.current[i].value = '';
        // }
        setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    };

    return (
        <>
            <Nav />
            <div className='contact'>
                <form ref={form} onSubmit={sendEmail} className='form-container'>
                    <label htmlFor='name'>Name *</label>
                    <input type="text" name="name" value={inputs.name} onChange={e => handleInputs(e)} />
                    <label htmlFor='email'>Email *</label>
                    <input type="email" name="email" value={inputs.email} onChange={e => handleInputs(e)} />
                    <label htmlFor='subject'>Subject *</label>
                    <input type="text" name="subject" value={inputs.subject} onChange={e => handleInputs(e)} />
                    <label htmlFor='message'>Message *</label>
                    <textarea name="message" value={inputs.message} onChange={e => handleInputs(e)} />
                    {inputs.name && inputs.email && inputs.subject && inputs.message &&
                        <button type="submit">Send</button>
                    }
                </form>
            </div>
            <Footer />
        </>
    )
}
