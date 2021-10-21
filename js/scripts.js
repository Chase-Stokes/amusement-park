$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const height = parseInt($("#height").val());
    $(".card").hide();
    if (height>= 48) {
      $(".tall").show();
      $(".everyone").show();
    } else if (height >=36) {
      $(".everyone").show();
    } else {
      $(".short").show();
      $(".everyone").show();
    }
  })

});