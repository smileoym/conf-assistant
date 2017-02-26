var dispatcher = require('./../dispatcher.js');
var confAbout = require('./../../data/conf-about');

function ParticipantStore(){
    var items = confAbout.participants;
    var listeners = [];

    function getItems(){
        return items;
    }

    function onChange(listener){
        listeners.push(listener);
    }

    function addParticipant(item) {
        items.push(item);
        triggerListeners();
    }

    function deleteParticipant(item) {
        var index;
        items.filter(function (_item, _index) {
           if(_item.name == item.name) {
               index = _index;
           }
        });
        items.splice(index, 1);
        triggerListeners();
    }

    function changeRegistration(item, isRegistered) {
        var _item = items.filter(function (a) {return a.name == item.name})[0];
        _item.registered = isRegistered || false;
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items);
        });
    }

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if(split[0] === 'member-item') {
            switch (split[1]) {
                case "add":
                    addParticipant(event.payload);
                    break;
                case "delete":
                    deleteParticipant(event.payload);
                    break;
                case "register":
                    changeRegistration(event.payload, true);
                    break;
                case "unregister":
                    changeRegistration(event.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }
}
// only store may change the data inside store
module.exports = new ParticipantStore();