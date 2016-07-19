
var AppDispatcher = require('../dispatcher/dispatcher');
var KEY_CONSTANTS = require('../constants/key_constants');

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
