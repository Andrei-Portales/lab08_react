import React from "react";
import "./game-view.scss";
import CardItem from "../../components/card-item/card-item";
import PropTypes from "prop-types";

const gameView = (props) => {
  return (
    <div className="game-view">
      <div className="game-content">
        {props.items.map((e) => {
          return <CardItem key={e.index} item={e} />;
        })}
      </div>
    </div>
  );
};

export default gameView;

gameView.propTypes = {
  items: PropTypes.array,
};
