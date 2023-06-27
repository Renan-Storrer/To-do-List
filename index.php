<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Todo List | Renan Storrer</title>
</head>
<body>
  <div>
    <form class="form">
      <div class="inputBox">
        <input type="text" id="task" placeholder="Insira sua tarefa" required>
        <button id="btn-remove-task">X</button>
      </div>
    </form>
    <ul id="data">

    </ul>
    <div class="footer">
      <p id="total_task"></p>
      <button id="clear">Limpar</button>
    </div>
  </div>

</body>
</html>