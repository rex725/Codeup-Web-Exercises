<?php

$adjectives = ["good" , "new" , "first" , "last" , "long" , "great" , "little" , "own" , "other" , "old"];
$nouns = ["man" , "mountain" , "state" , "ocean" , "country" , "building" , "cat" , "airline", "Walt Disney" , "Mount Kilimanjaro"];

function combiningRandomNounsandAdjectives ($adjectives, $nouns)
{
	$nounRandomNumber = rand(0, 9);
	$adjectiveRandomNumber = rand(0, 9);
	$randomNoun = $nouns[$nounRandomNumber];
	$randomAdjective = $adjectives[$adjectiveRandomNumber];
	return "{$randomAdjective} {$randomNoun}";
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Server Name Generator</title>
</head>
<body>
	<h1><?php echo combiningRandomNounsandAdjectives($adjectives, $nouns) ?></h1>
</body>
</html>