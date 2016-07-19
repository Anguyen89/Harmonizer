var React = require('react');
var AddKeyListener = require('../util/add_key_listener');
var KeyStore = require('../stores/key_store');
var TONES = require('../util/tones.js');

var NoteKey = require('./note_key');

var Organ = React.createClass({

  getInitialState: function(){
    return { notes: KeyStore.all()};
  },

  componentDidMount: function(){
    this.keyListener = KeyStore.addListener(this._onChange);
    AddKeyListener();
  },

  _onChange: function(){
    this.setState({ notes: KeyStore.all()});
  },

  componentWillUnmount: function(){
    this.keyListener.remove();
  },

  render: function(){
    return (
      <div>
        <h1>
          <a className="not-link" href="https://media.giphy.com/media/26vUT3HtrIrWESFcA/giphy.gif">
            Organ Grinder
          </a>
        </h1>
        <h4 className="directions">Use the keys asdfjkl; to play the organ</h4>

      <div className="keys group">
        {
          Object.keys(TONES).map(function(noteName, idx){
            return <NoteKey noteName={noteName} key={idx} id={noteName}>
              {noteName}
            </NoteKey>;
          })
        }

      </div>


      </div>
    );
  }




});

module.exports = Organ;
