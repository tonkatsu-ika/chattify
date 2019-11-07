// socket.io
var socketio = io();
console.log("OK");
$(document).ready(function(){
  console.log("jQuery OK");
  $("#new-message").keydown(function(e){
      console.log("Enter event triggered");
    if (e.keyCode === 13) {
      console.log("Enter event triggered");
      socketio.emit("message", $("#new-message").val());
      $("#new-message").val("");
      return false;
    };
  });
});
