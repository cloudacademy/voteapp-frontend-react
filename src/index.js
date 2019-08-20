import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VoteApp from './components/VoteApp';

//call the ReactDOM.render to render out the VoteApp component into the <div id="root"> element within the index.html file
ReactDOM.render(<VoteApp />, document.getElementById('root'));