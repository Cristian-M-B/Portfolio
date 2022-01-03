import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'><BsLinkedin size={25} /></a>
            <a href='https://github.com/Cristian-M-B' target='_blank' rel='noreferrer'><BsGithub size={25} /></a>
            <a href='https://api.whatsapp.com/send?phone=5491168071990' target='_blank' rel='noreferrer'><BsWhatsapp size={25} /></a>
            <a href='mailto:crisbaronetto@hotmail.com'><AiOutlineMail size={30} /></a>
            <a href='https://drive.google.com/file/d/1RxU-PS31Dnl6xrYCbIyAXI9s51hlbREu/view' target='_blank' rel='noreferrer'><AiOutlineFilePdf size={30} /></a>
        </div>
    )
}
