// socket.io
var socketio = io();

$(document).ready(function(){

  $("#new-message").keydown(function(e){

    if (e.keyCode === 13) {

      socketio.emit("message", $("#new-message").val());
      $("#new-message").val("");
      return false;

    };
  });
});
