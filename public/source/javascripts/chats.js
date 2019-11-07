// socket.io
var socketio = io();

var buildHTML = function(msg){
  var html =  `
        <div class="messages__message">
          <div class="message-content__user">
            <div class="message-content__user--avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="message-content__user--nickname">
              tonkatsu
            </div>
          </div>
          <div class="message-content__content">
            <div class="message-content__content--content">
              ${msg}
            </div>
          </div>
        </div>
  `;

  return html;
};


$(document).ready(function(){

  // posting a message from client to server
  $("#new-message").keydown(function(e){

    if (e.keyCode === 13 && $("#new-message").val() !== "") {

      socketio.emit("message", $("#new-message").val());
      $("#new-message").val("");
      return false;

    };
  });

  // receiving messages from server by client
  socketio.on("message", function(msg){
    var html = buildHTML(msg);
    $(".messages").append(html);
    $(".messages").animate({scrollTop:$(".messages").height()}, 100);
    return false;
  });
});
