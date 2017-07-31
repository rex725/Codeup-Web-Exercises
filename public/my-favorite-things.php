<?php
$myFavoriteThings = ["books" , "my beautiful wife" , "D&D" , "my dog" , "programming"];
?>
<!DOCTYPE html>
<html>
<head>
	<title>My Favorite Things</title>
</head>
<body>
	<table>
		<tr>
			<th>My Favorite Things</th>
		</tr>
		<?php foreach($myFavoriteThings as $thing) { ?>
		<tr>
			<td><?php echo $thing;?></td>
		</tr>
		<?php } ?>
	</table>
</body>
</html>