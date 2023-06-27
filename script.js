$(document).ready(function(){
  $("#btn-add").on("click", function(e){
    e.preventDefault();
    txt = $("#txt").val();
    alert(txt);
  })
})