import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li><a href="#skills">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
          <a href="https://linkedin.com"><BsLinkedin/></a>
          <a href="https://Twitter.com"><BsTwitter/></a>
          <a href="Mailto:festus891@yahoo.com"><MdEmail/></a>
          <a href="https://Github.com"><FaGithub/></a>
          <a href="https://wa.me/+2348143430827" target='_blank'><IoLogoWhatsapp /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Copyright 2023. Made by Aderibigbe festus</small>
      </div>
    </footer>
  )
}

export default Footer