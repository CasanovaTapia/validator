var PouchDB = require('pouchdb');

var db = new PouchDB('buzzwords');
var remoteCouch = false;

function checkWord() {
  var input = document.getElementById('myform').elements.item(0).value;
  if (db.indexOf(input) == -1 ) {
      window.alert("Sorry, that wasn't a buzzword. Try again.");
  } else {
      window.alert("Yay, that was a buzzword. You rock.")
  }
}
