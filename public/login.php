<?php
session_start();
$sessionid = session_id();
function pageController() {
	$username = isset($_POST['username'])? $_POST['username']: '';
	$password = isset($_POST['password'])? $_POST['password']: '';
	$loginFail = '';
	if(!empty($_POST)) {
		if($username === 'guest' && $password === 'password') {
			$_SESSION['logged_in_user'] = $username;
			header('Location:authorized.php');
			die();
		} else {
			$loginFail = 'Invalid username or password.';
		}
	}
	if(isset($_SESSION['logged_in_user'])) {
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