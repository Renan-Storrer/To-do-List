$(document).ready(function(){

  //função para ver as tarefas em aberto
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

  //função para ver quantidade de tarefas
  function totalTask() {
    $.ajax ({
      url: 'task.php',
      type: 'post',
      success: function(result){
        $("#total_task").html(result);
      }
    });
  }
  totalTask();

  //função para botão de inserir tarefa
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
          totalTask()
        }else {
          console.log(result);
        }
      }
    });
  });

  //função para botão de deletar tarefa específica 
  $(document).on("click", "#delete", function(){
    id = $(this).data("id");
    element = $(this);

    $.ajax({
      url: 'delete.php',
      type: 'post',
      data: {id: id},
      success: function(result) {
        if (result == 1) {
          $(element).closest("li").fadeOut();
          showData();
          totalTask();
        }
      }
    });
  });
})