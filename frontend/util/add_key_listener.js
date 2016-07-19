var $ = require('jquery');
var KeyActions = require('../actions/key_actions');
var TONES = ("../constants/tones");


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
    var code = e.keycode;
    var valid = validKeys.indexOf(code) !== -1;
    _heldKeys.push(code);
    if(_heldKeys.indexOf(code) === -1 && valid){
      KeyActions.keyPressed(NOTE_MAP[code]);
    }
  });
  
  $(document).on('keyup', (e) => {
    var code = e.keycode;
    var valid = _heldKeys.indexOf(code);
    if (valid !== 1 ){
      _heldKeys.splice(code, 1);
      KeyActions.keyReleased(NOTE_MAP[code])
    }

  });
}
