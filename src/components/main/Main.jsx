import React, { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import PorEstado from './por_estado/PorEstado';
import Card from './card_perfil/Card';
import Posicao from './posicao/Posicao';

import './style.css';

const Main = () => {
  const [opcao_visivel, setOpcao] = useState('opcoes_off');
  const [selecao, setSelecao] = useState('Nome');
  const [nomeSelecionado, setNomeSelecionado] = useState('selecionado');
  const [idadeSelecionado, setIdadeSelecionado] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [deslocamento, setDeslocamento] = useState(0);
  const [corAtiva1, setCorAtiva1] = useState('#ccc');
  const [corAtiva2, setCorAtiva2] = useState('#767676');
  const [numeroExibir, setNumeroExibir] = useState(9);
  const [border_on, setBorder_on] = useState({
    b1: true,
    b2: false,
    b3: false
  });
  const card_div = useRef(null);
  const card = useRef(null);

  function deslocamento_link(obj) {
    // o state "deslocamento" serve para indentificar a posição atual da div
    if (obj.destino == deslocamento) return;
    console.log(obj.destino, obj.direcao);

    let distancia = obj.destino - deslocamento;
    let deslocamento_add = deslocamento + distancia;

    card_div.current.style = `
         transform: translate(${obj.direcao}${deslocamento_add}px);
         transition: 1s;
    `;
    setDeslocamento(obj.destino);
  }

  useEffect(() => {
    if (deslocamento > 0) {
      setCorAtiva1('#767676');
      setCorAtiva2('#767676');
      setNumeroExibir(9);
      setBorder_on({ b1: false, b2: true, b3: false });
    }
    if (deslocamento == card.current.offsetWidth * 2) {
      setCorAtiva2('#ccc');
      setNumeroExibir(7);
      setBorder_on({ b1: false, b2: false, b3: true });
    }
    if (deslocamento == 0) {
      setCorAtiva1('#ccc');
      setCorAtiva2('#767676');
      setBorder_on({ b1: true, b2: false, b3: false });
    }
  }, [deslocamento]);

  function desloca_div_right() {
    if (deslocamento == card.current.offsetWidth * 2) return;
    let mover =
      deslocamento == 0
        ? card.current.offsetWidth
        : deslocamento + card.current.offsetWidth;
    card_div.current.style = `
        transform: translate(-${mover}px);
        transition: 1s;
    `;
    setDeslocamento(mover);
  }

  function desloca_div_left() {
    if (deslocamento == 0) return;
    let mover = deslocamento - card.current.offsetWidth;
    card_div.current.style = `
        transform: translate(-${mover}px);
        transition: 1s;
    `;
    setDeslocamento(mover);
  }

  function visivel_on_off() {
    console.log(deslocamento);
    let visivel = opcao_visivel == 'opcoes_off' ? 'opcoes_on' : 'opcoes_off';
    setOpcao(visivel);
  }

  function seleciona_ordenacao(op) {
    setNomeSelecionado('');
    setIdadeSelecionado('');
    setEstadoSelecionado('');
    if (op == 'nome') {
      setNomeSelecionado('selecionado');
      setSelecao('Nome');
    }
    if (op == 'idade') {
      setIdadeSelecionado('selecionado');
      setSelecao('Idade');
    }
    if (op == 'estado') {
      setEstadoSelecionado('selecionado');
      setSelecao('Estado');
    }
    visivel_on_off();
  }

  return (
    <main>
      <div>
        <p>
          Home {'>'} Usuários {'>'} Detalhes
        </p>
        <h1>Lista de membros</h1>
        <div className="content">
          <PorEstado />
          <div className="ordem_and_cards">
            <div className="ordem_card">
              <p>Exibindo {numeroExibir} de 25 itens</p>
              <div>
                <span>
                  Orderna por:
                  <span className="select">
                    <div id="box_selecao" onClick={() => visivel_on_off()}>
                      <span>{selecao}</span>
                      <span className="icon_ordem">
                        <BiChevronDown />
                      </span>
                    </div>
                    <div className={`opcoes ${opcao_visivel}`}>
                      <span
                        className={`op opNome ${nomeSelecionado}`}
                        onClick={() => {
                          seleciona_ordenacao('nome');
                        }}
                      >
                        Nome
                      </span>
                      <span
                        className={`op opIdade ${idadeSelecionado}`}
                        onClick={() => {
                          seleciona_ordenacao('idade');
                        }}
                      >
                        Idada
                      </span>
                      <span
                        className={`op opEstado ${estadoSelecionado}`}
                        onClick={() => {
                          seleciona_ordenacao('estado');
                        }}
                      >
                        Estado
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <div className="cards">
              <div ref={card_div}>
                <div ref={card} className="card_group">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="card_group">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="card_group">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
            <Posicao
              acao_right={desloca_div_right}
              acao_left={desloca_div_left}
              cor1={corAtiva1}
              cor2={corAtiva2}
              d_1={deslocamento_link}
              border={border_on}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
