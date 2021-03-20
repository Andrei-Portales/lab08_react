import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.scss';
import favicon from './assets/images/favicon.png';

document.getElementById('icon-bar').href = favicon;

ReactDOM.render(<App />, document.getElementById('root'));
