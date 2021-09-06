import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import './style.css';

const Card = () => {
  return (
    <div className="card_perfil">
      <div className="foto">
        <IoPersonCircleOutline color={'#cdcdcd'} size={50} />
      </div>
      <h5>alejandra rodrigues</h5>
      <p>3833 rua santa catarina</p>
      <p>umuarama Santa Catarina - CEP.43646</p>
    </div>
  );
};

export default Card;
