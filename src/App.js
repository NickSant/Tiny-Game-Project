import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [max, setMax] = useState(300);
  const [min, setMin] = useState(0);

  const Menu = () => {
    setEstado("ENTRADA");
    setMax(300);
    setMin(0);
    setNumPalpite(1);
    setPalpite(150);
  };

  const iniciarJogo = () => {
    setEstado("RODANDO");
  };

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="Fim">
        <p>
          Acertei o número <span>{palpite}</span> com {numPalpite} tentativas!
        </p>
        <button onClick={Menu}>Ir para o Menu</button>
      </div>
    );
  }
  if (estado === "ENTRADA") {
    return (
      <div className="Fim">
        <p>
          Pense em um número entre <span>0</span> e <span>300</span> que eu irei
          advinhar!
        </p>
        <button onClick={iniciarJogo}>Jogar!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>
        O seu numero é <span>{palpite}</span>?
      </p>
      <button onClick={menor}>Menor!</button>
      <button className="acerto" onClick={acertou}>
        Acertou!
      </button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
