import React from "react";
import "./status-panel.scss";

const statusPanel = (props) => {
  return (
    <div className="main-panel">
      <div className="card content">
        <div className="txt-cantidad">
          Cartas encontradas: {props.itemsFound}/{props.itemsLength}
        </div>
        <div className="txt-cantidad">Movimientos: {props.movimientos}</div>
        <button className="btn-empezar" onClick={props.startFunction}>
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default statusPanel;
