<?php
require 'functions.php';
function pageController()
{
	$counter = inputHas("counter") ? inputGet("counter") : 0;
	return [
		"counter" => $counter
	];
}
extract(pageController());
?>
<!DOCTYPE html>
<html>
<head>
	<title>Ping</title>
	<link rel="stylesheet" href="/css/bootstrap.css">
	<link rel="stylesheet" href="/css/pingpong.css">
</head>
<body>
	<div class="heading-div">
		<a href="/pong.php?counter=<?=$counter + 1?>"><img src ="/img/pingpong_ball.png" id="pingpong_ball"></a>
		<h1><?= escape($counter) ?></h1>
	</div>
	<div>
		<a href="/pong.php?counter=<?=$counter = 0?>"><img src="/img/ping-pong-table.png" id="ping_pong_table"></a>
	</div>
	<script src="/js/jquery-3.2.1.js"></script>
	<script src="/js/ping.js"></script>
</body>
</html>