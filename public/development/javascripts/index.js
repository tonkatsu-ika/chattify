$(document).ready(function(){

  $('#group-new_btn').on('click', function(){
    
    if(confirm("Create Chattify?")) {
      window.location.href = "/chats/sample.html";
    }
  });

});

