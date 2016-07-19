
var AppDispatcher = require('../dispatcher/dispatcher.js');
var KEY_CONSTANTS = require('../constants/key_constants.js');

var KeyActions = {
  keyPressed: function(noteName){
    AppDispatcher.dispatch({
      actionType: KEY_CONSTANTS.KEY_PRESSED,
      note: noteName
    });
  },

  keyReleased: function(noteName){
    AppDispatcher.dispatch({
      actionType: KEY_CONSTANTS.KEY_RELEASED,
      note: noteName
    });
  }
};

module.exports = KeyActions;
