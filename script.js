$(document).ready(function(){
  $("#btn-add").on("click", function(e){
    e.preventDefault();
    txt = $("#txt").val();

    $.ajax({
      url: 'insert.php',
      type: 'post',
      data: {txt: txt},
      success: function(result){
        if (result == 1) {
          txt = $("#txt").val('');
          alert("Tarefa adicionada com sucesso.");
        }else {
          console.log(result);
        }
      }
    })
  })
})