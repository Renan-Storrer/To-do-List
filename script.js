$(document).ready(function(){
  $("#btn-add").on("click", function(e){
    e.preventDefault();
    txt = $("#txt").val();
    
    $.ajax({
      url: 'insert.php',
      type: 'post',
      data: '{txt: txt}',
      success: function(restult) {
        
      }
    })
  })
})