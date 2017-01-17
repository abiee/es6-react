import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

const mountingNode = document.createElement('div');
document.body.appendChild(mountingNode);

render(<App />, mountingNode);
