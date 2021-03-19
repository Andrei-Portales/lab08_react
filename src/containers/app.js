import React, { Component } from "react";
import Navbar from "../components/nav-bar/nav-bar";
import GameView from "../containers/game-view/game-view";
import StatusPanel from "../components/status-panel/status-panel";
import "./app.scss";
import items from "./game-view/game-items";
import { startConfetti, stopConfetti } from "../animation/confetti";
import aplausos from '../assets/audio/aplausos.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.canFlipCarts = true;
    this.state = {
      items: [],
      itemsFound: 0,
      movimientos: 0,
    };
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  start() {
    stopConfetti();

    let itemsTemp = [...items];
    for (let i = 0; i < itemsTemp.length; i++) {
      itemsTemp[i].flip = this.flipCard.bind(this, itemsTemp[i].index);
      itemsTemp[i].isFlip = false;
      itemsTemp[i].canFlip = true;
    }

    this.setState({
      items: itemsTemp,
    });

    this.shuffleArray(itemsTemp);

    this.setState({
      itemsFound: 0,
      movimientos: 0,
      items: itemsTemp,
    });
  }

  flipCard(index) {
    
    if (this.canFlipCarts) {
      this.canFlipCarts = false;
      for (let i = 0; i < this.state.items.length; i++) {
        if (
          this.state.items[i].index === index &&
          this.state.items[i].canFlip
        ) {
          this.state.items[i].isFlip = !this.state.items[i].isFlip;
        }
      }

      this.setState({
        items: [...this.state.items],
        movimientos: this.state.movimientos + 1,
      });

      let selected = [];

      for (let i = 0; i < this.state.items.length; i++) {
        if (this.state.items[i].isFlip && this.state.items[i].canFlip) {
          selected.push(this.state.items[i]);
        }
      }

      if (selected.length === 2)
        new Promise((resolve) => setTimeout(resolve, 700)).then((event) => {
          if (selected[0].id === selected[1].id) {
            for (let i = 0; i < this.state.items.length; i++) {
              if (
                this.state.items[i].id === selected[0].id ||
                this.state.items[i].id === selected[1].id
              ) {
                this.state.items[i].canFlip = false;
              }
            }
            const newValue = this.state.itemsFound + 2;
            this.setState({
              itemsFound: newValue,
            });

            if (newValue === items.length) {
              startConfetti();
              new Audio(aplausos).play();
            }
          } else {
            for (let i = 0; i < this.state.items.length; i++) {
              if (
                this.state.items[i].id === selected[0].id ||
                this.state.items[i].id === selected[1].id
              ) {
                this.state.items[i].isFlip = false;
              }
            }
            this.setState({});
          }

          this.canFlipCarts = true;
        });
      else this.canFlipCarts = true;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="row-view">
          <GameView items={this.state.items} />
          <StatusPanel
            startFunction={this.start.bind(this)}
            itemsLength={this.state.items.length}
            itemsFound={this.state.itemsFound}
            movimientos={this.state.movimientos}
          />
        </div>
      </div>
    );
  }
}

export default App;
