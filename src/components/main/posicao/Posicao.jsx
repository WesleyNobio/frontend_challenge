import React from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

import './style.css';

const Posicao = props => {
  const borda1 = props.border.b1
    ? { borderBottom: '5px solid #767676' }
    : { borderBottom: '5px solid #fff' };
  const borda2 = props.border.b2
    ? { borderBottom: '5px solid #767676' }
    : { borderBottom: '5px solid #fff' };
  const borda3 = props.border.b3
    ? { borderBottom: '5px solid #767676' }
    : { borderBottom: '5px solid #fff' };
  return (
    <div className="posicao">
      <span onClick={() => props.acao_left()}>
        <AiFillLeftCircle size={30} cursor={'pointer'} color={props.cor1} />
      </span>
      <div>
        <a
          onClick={() => props.d_1({ destino: 0, direcao: '+', caso: 1 })}
          style={borda1}
        >
          1
        </a>
        <a
          onClick={() => props.d_1({ destino: 780, direcao: '-', caso: 2 })}
          style={borda2}
        >
          2
        </a>
        <a
          onClick={() => props.d_1({ destino: 1560, direcao: '-', caso: 3 })}
          style={borda3}
        >
          3
        </a>
      </div>
      <span onClick={() => props.acao_right()}>
        <AiFillRightCircle size={30} cursor={'pointer'} color={props.cor2} />
      </span>
    </div>
  );
};

export default Posicao;
