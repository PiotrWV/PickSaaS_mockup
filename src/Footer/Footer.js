import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
  return (

    <div className="footer">
        <p>Mockup stworzony w celu rekrutacji na stanowisko Junior Frontend Developer</p>
        <p>Privace Terms About us </p>
        <FacebookIcon />
        <InstagramIcon />
    </div>
  );
}

export default Footer;
