<?php
session_start();
function clearSession() {
	session_unset();
	session_regenerate_id(true);
	header('Location:login.php');
	die();
}
clearSession();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Logout</title>
</head>
<body>

</body>
</html>