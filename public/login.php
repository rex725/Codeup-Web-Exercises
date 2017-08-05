<?php
session_start();
$sessionid = session_id();
require_once 'functions.php';
require_once '../Auth.php';
require_once '../Input.php';
require_once 'Log.php';
$authorize = new Auth();
$log = new Log();
var_dump(inputHas('logged_in_user'));
function pageController() {
	$username = inputHas('username')? escape(inputGet('username')): '';
	$password = inputHas('password')? escape(inputGet('password')): '';
	$loginFail = '';
	if(!empty($_POST)) {
		Auth::attempt($username, $password);
		if($username === 'guest' && $password === 'password') {
			$_SESSION['logged_in_user'] = $username;
			// header('Location:authorized.php');
			// die();
		} else {
			$loginFail = 'Invalid username or password.';
		}
	}
	if(Auth::check()) {
		header('Location:authorized.php');
		die();
	}
	$data = [
		'username' => $username,
		'password' => $password,
		'loginFail' => $loginFail
	];
	return $data;

}
extract(pageController());
?>
<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<form method='POST' action='login.php'>
		<div>
			<label for="username">Username:</label>
			<input type='text' name='username' id='username'>
		</div>
		<div>
			<label for='password'>Password:</label>
			<input type='password' name='password' id='password'>
		</div>
		<button type='submit'>Submit</button>
	</form>
	<?=htmlspecialchars(strip_tags($loginFail))?>
</body>
</html>