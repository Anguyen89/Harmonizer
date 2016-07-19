var $ = require('jquery');
var KeyActions = require('../actions/key_actions');
var TONES = require("../constants/tones");


var NOTE_MAP = {};

var tones = Object.keys(TONES);


var validKeys = [
  65, // 'a'
  83, // 's'
  68, // 'd'
  70, // 'f'
  74, // 'j'
  75, // 'k'
  76, // 'l'
  186 // ';'
];

tones.forEach(function(tone, i){
  NOTE_MAP[validKeys[i]] = tone;
});

var _heldKeys = [];

module.exports = function(){
  $(document).on('keydown', (e) => {
    var code = e.keyCode;
    var valid = validKeys.indexOf(code) !== -1;
    if(_heldKeys.indexOf(code) === -1 && valid){
      _heldKeys.push(code);
      KeyActions.keyPressed(NOTE_MAP[code]);
    }
  });

  $(document).on('keyup', (e) => {
    var code = e.keyCode;
    var idx = _heldKeys.indexOf(code);
    // console.log(NOTE_MAP[code]);
    console.log(NOTE_MAP);
    if (idx !== 1 ){
      _heldKeys.splice(idx, 1);
      KeyActions.keyReleased(NOTE_MAP[code])
    }

  });
}
