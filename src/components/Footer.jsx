import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineFilePdf } from 'react-icons/ai';
import cv from '../assets/utils/cv.pdf';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer'><BsLinkedin size={25} /></a>
            <a href='https://github.com/Cristian-M-B' target='_blank' rel='noreferrer'><BsGithub size={25} /></a>
            <a href='https://api.whatsapp.com/send?phone=5491168071990' target='_blank' rel='noreferrer'><BsWhatsapp size={25} /></a>
            <a href='mailto:crisbaronetto@hotmail.com'><AiOutlineMail size={30} /></a>
            <a href={cv} download='Cristian Baronetto - Full Stack Developer - CV'><AiOutlineFilePdf size={30} /></a>
        </div>
    )
}
