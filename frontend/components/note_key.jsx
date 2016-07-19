var React = require('react');
var Note = require('../util/notes.js');
var TONES = require('../util/tones.js');
var KeyStore = require('../stores/key_store');

var NoteKey = React.createClass({

  getInitialState: function(){
    return { pressed: this.thisKeyPressed()};
  },

  componentDidMount: function(){
    this.note = new Note(TONES[this.props.noteName]);
    this.keyListener = KeyStore.addListener(this._onChange);
  },

  thisKeyPressed: function(){
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  _onChange: function(){
    var pressed = this.thisKeyPressed();
    // console.log(pressed);
    if (pressed){
      this.note.start();
    }else{
      this.note.stop();
    }
    this.setState({ pressed: pressed});
  },

  render: function(){
    var className = 'note-key key-${this.props.noteName}';
    if (this.state.pressed){
      className += 'pressed';
    }
    return (
      <div className={className}>
        {this.props.noteName}
      </div>
    );
  }

});

module.exports = NoteKey;
