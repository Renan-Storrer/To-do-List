<?php
  include 'config.php';

  $sql = "SELECT * FROM demo";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
?>

<li><p><?php echo $row['txt']; ?></p> <button id="delete" data-id="<?php echo $row['id']; ?>">X</button></li>

<?php } }else { echo "<div style='text-align:center;'>Você ainda não tem nenhuma tarefa.</div>"; } ?>
