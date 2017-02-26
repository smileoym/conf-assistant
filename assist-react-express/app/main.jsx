var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hello from JSX!");

var ParticipantsList = require('./components/ParticipantsList.jsx');
var participantStore = require('./stores/ParticipantStore.jsx');

function render(){
    ReactDOM.render(<ParticipantsList participants={participantStore.getItems()}/>, app)
}

participantStore.onChange(function (items) {
    render();
})
render();
