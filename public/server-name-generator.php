<?php

$adjectives = ["good" , "new" , "first" , "last" , "long" , "great" , "little" , "own" , "other" , "old"];
$nouns = ["man" , "mountain" , "state" , "ocean" , "country" , "building" , "cat" , "airline", "Walt Disney" , "Mount Kilimanjaro"];

function combiningRandomNounsandAdjectives ($adjectives, $nouns)
{
	$nounRandomNumber = rand(0, count($nouns) - 1);
	$adjectiveRandomNumber = rand(0, count($adjectives) - 1);
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
	<h1><?= combiningRandomNounsandAdjectives($adjectives, $nouns) ?></h1>
</body>
</html>