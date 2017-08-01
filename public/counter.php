<?php
function pageController() 
{
	$counter = isset($_GET["counter"])? $_GET["counter"] : 0;
	return [
		"counter" => $counter
	];
}
extract(pageController());	
?>
<!DOCTYPE html>
<html>
<headhttp://codeup.dev/counter.php?counter=0>
	<title>Counter</title>
</head>
<body>
	<form>
		<div>
			<a href="counter.php?counter=<?=$counter + 1?>">Increase</a>
		</div>
		<div>
			<h1><?= $counter ?></h1>
		</div>
		<div>
			<a href="counter.php?counter=<?=$counter - 1?>">Decrease</a>
		</div>
	</form>
</body>
</html>
<!-- -create a counter that starts at zero
-there should be two links that increase and decrease the counts relatively
-create a function that increases a counter
-create a function the decreases the same counter
-a get request should be sent with each click to the each link
-the link should capture the current value to increase or decrease respectively
 -->