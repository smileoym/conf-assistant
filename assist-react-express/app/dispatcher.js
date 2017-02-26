/**
 * Created by Mykola on 21.02.2017.
 */
var guid = require('guid');
var listeners = {};

module.exports = {
    register: function (cb) {
        var id = guid.raw();
        listeners[id] = cb;
        return id;
    },
    dispatch: function (payload) {
        console.info("Debugging...", payload);
        for(var id in listeners) {
            var listener = listeners[id];
            listener(payload);
        }
    }
}