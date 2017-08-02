<?php
session_start();
if(empty($_SESSION['logged_in_user'])){
	header("Location:login.php");
	die();
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Authorized</title>
</head>
<body>
	<h1>Authorized</h1>
	<div>
		<?= $_SESSION['logged_in_user'] ?>
	</div>
	<a href="logout.php">Logout</a>
</body>
</html>