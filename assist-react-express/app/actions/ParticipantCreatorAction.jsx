var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "member-item:add"
        })
    },
    delete: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "member-item:delete"
        })
    },
    register: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "member-item:register"
        })
    },
    unregister: function (item) {
        dispatcher.dispatch({
            payload: item,
            type: "member-item:unregister"
        })
    }
}