import React from 'react';
import './style.css';

import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="div_img">
          <img src={logo} alt="" />
        </div>
        <div className="div_pesquisa">
          <label htmlFor="pesquisa">
            <AiOutlineSearch />
            <input type="text" id="pesquisa" placeholder="Buscar aqui" />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
