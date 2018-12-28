import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/scss/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
