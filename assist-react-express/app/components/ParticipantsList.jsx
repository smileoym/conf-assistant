var React = require('react');
var Participant = require('./Participant.jsx');
var ParticipantAdd = require('./ParticipantAdd.jsx');

module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Participants List:</h1>
                <div>
                    {
                        this.props.participants.map(function(item, index) {
                            return <Participant key={"index" + index} item={item}/>;
                        })
                    }
                </div>
                <ParticipantAdd/>
            </div>
        )
    }
});