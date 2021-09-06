import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from 'react-icons/fa';

import './style.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="f_img">
          <img src={logo} alt="" />
        </div>
        <h5>Juntos Somos Mais Fidelização S.A.</h5>
        <p>Siga-nos nas redes sociais:</p>
        <div className="sociais">
          <FaFacebookSquare size={30} color={'#fff'} />
          <FaInstagramSquare size={30} color={'#fff'} />
          <FaLinkedin size={30} color={'#fff'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
