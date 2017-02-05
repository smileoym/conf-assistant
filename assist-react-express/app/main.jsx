var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hello from JSX!");

var ParticipantsList = require('./components/ParticipantsList.jsx');
var confAbout = require('./../data/conf-about');

ReactDOM.render(<ParticipantsList participants={confAbout.participants}/>, app)