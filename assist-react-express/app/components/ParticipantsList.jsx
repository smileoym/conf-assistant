var React = require('react');

var ParticipantsList = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Participants List:</h1>
                <div>
                    {
                        this.props.participants.map(function (member) {
                            return <Member key={member.name} name={member.name}/>;
                        })
                    }
                </div>
            </div>
        )
    }
});

function Member(props) {
    return <div>{props.name}</div>
}

module.exports = ParticipantsList;