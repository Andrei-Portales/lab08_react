import React, { Component } from 'react';
import './nav-bar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Juego de cartas - Andrei Portales Okrassa 19825
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
