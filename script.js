$(document).ready(function(){
  function showData() {
    $.ajax ({
      url: 'show.php',
      type: 'post',
      success: function(result){
        $("#data").html(result);
      }
    })
  }
  showData()

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
          showData()
        }else {
          console.log(result);
        }
      }
    })
  })
})