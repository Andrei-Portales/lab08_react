import React from "react";
import ReactCardFlip from "react-card-flip";
import "./card-item.scss";
import cartaImg from "../../assets/images/carta.jpg";
import PropTypes from "prop-types";

const cardItem = (props) => {
  const item = props.item;

  return (
    <div className="card-container">
      <ReactCardFlip
        isFlipped={item.isFlip}
        flipDirection="vertical"
        flipSpeedBackToFront="0.5"
      >
        <div onClick={item.flip}>
          <div className="card-item col">
            <img className="card-image" src={cartaImg} alt={item.image} />
          </div>
        </div>

        <div onClick={item.flip}>
          <div className="card-item col">
            <img className="card-image" src={item.image} alt={item.image} />
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default cardItem;

cardItem.proptypes = {
  item: PropTypes.object,
};
