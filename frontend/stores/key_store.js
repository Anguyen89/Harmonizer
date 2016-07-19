var Store =  require("flux/utils").Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var KeyStore = new Store(AppDispatcher);

var KEY_CONSTANTS = require('../constants/key_constants.js');

var _keys = [];

var TONES = require('../util/tones.js');

KeyStore.all = function(){
  return _keys.slice(0);
};


KeyStore.addKey = function(key){
  var idx = _keys.indexOf(key);
  if (idx === -1){
    _keys.push(key);
    this.__emitChange();
  }

};

KeyStore.removeKey = function(key){
  var idx = _keys.indexOf(key);
  if (idx !== -1){
    _keys.splice(idx, 1);
    this.__emitChange();
  }
};


KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case KEY_CONSTANTS.KEY_PRESSED:{
      KeyStore._addKey(payload.note);
      break;
    }
    case KEY_CONSTANTS.KEY_RELEASED:{
      KeyStore._removeKey(payload.note);
      break;
    }
  }
};
