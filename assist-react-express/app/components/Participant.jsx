var React = require('react');
var action = require('./../actions/ParticipantCreatorAction.jsx');

module.exports = React.createClass({
    toggleRegistration: function (e) {
        e.preventDefault();//to prevent page reload

        if(this.props.item.registered) {
            action.unregister(this.props.item);
        } else {
            action.register(this.props.item);
        }
    },
    delete: function (e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    render: function () {
        return(
        <div className="row">
            <div className="six columns">
                <h4 className={this.props.item.registered ? "": "unregistered"}>{this.props.item.name}</h4>
            </div>
            <form className="three columns" onSubmit={this.toggleRegistration}>
                <button className={this.props.item.registered ? "": "button-primary"}>
                    {this.props.item.registered ? "Unregister": "Register"}
                </button>
            </form>
            <form className="three columns" onSubmit={this.delete}>
                <button>&times;</button>
            </form>
        </div>
        )
    }
});
