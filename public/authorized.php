<?php
session_start();
require_once 'functions.php';
require_once '../Auth.php';
require_once '../Input.php';
require_once 'Log.php';
$authorize = new Auth();
$log = new Log();
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
		<?= escape(Auth::user()) ?>
	</div>
	<a href="logout.php">Logout</a>
</body>
</html>