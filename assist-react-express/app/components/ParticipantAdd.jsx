var React = require('react');
var action = require('./../actions/ParticipantCreatorAction.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        return {input: ''};
    },
    handleInputName: function (e) {
        this.setState({input: e.target.value});
    },
    addMember: function (e) {
        // prevents page from refresh
        e.preventDefault();
        //console.log("Adding member: ", this.state.input);
        action.add({
            name: this.state.input
        });
        this.setState({input: ''})
    },
    render: function () {
        return (
            <div className="participant-addItem">
                <form onSubmit={this.addMember}>
                    <input type="text" value={this.state.input} onChange={this.handleInputName}/>
                    <button>Add Participant</button>
                </form>
            </div>
        )
    }
})