var React = require('react');
var ReactDOM = require('react-dom');
// window.AppDispatcher = require('./dispatcher/dispatcher.js');
// window.Note = require('./util/notes.js');
// keyListener = require('./util/add_key_listener.js');

var Organ = require('./components/organ');



document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Organ/>, root);
});
