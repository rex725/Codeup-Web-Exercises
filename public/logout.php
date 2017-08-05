<?php
session_start();
require_once 'functions.php';
require_once '../Auth.php';
require_once '../Input.php';
require_once 'Log.php';
$authorize = new Auth();
$log = new Log();
Auth::logout();
// function clearSession() {
// 	session_unset();
// 	session_regenerate_id(true);
// 	header('Location:login.php');
// 	die();
// }
// clearSession();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Logout</title>
</head>
<body>

</body>
</html>