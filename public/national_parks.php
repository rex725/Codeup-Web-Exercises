<?php
	require_once __DIR__ . "/../db_connect.php";
	require_once __DIR__ . "/../Input.php";	
	function pageController($dbc) {
		$counter = Input::get('counter', 0);
		if($counter <= 0) {
			$stmt = $dbc->prepare("SELECT * FROM national_parks ORDER BY name LIMIT :limitValue");
			$stmt->bindValue(':limitValue', 4, PDO::PARAM_INT);

			$prev = "";
			$next = "Next";
		} else if($counter === '1') {
			$stmt = $dbc->prepare("SELECT * FROM national_parks ORDER BY name LIMIT :limitValue OFFSET :offsetValue");
			$stmt->bindValue(':limitValue', 4, PDO::PARAM_INT);
			$stmt->bindValue(':offsetValue', 4, PDO::PARAM_INT);

			$prev = "Prev";
			$next = "Next";
		} else {
			$stmt = $dbc->prepare("SELECT * FROM national_parks ORDER BY name LIMIT :limitValue OFFSET :offsetValue");
			$stmt->bindValue(':limitValue', 4, PDO::PARAM_INT);
			$stmt->bindValue(':offsetValue', 8, PDO::PARAM_INT);

			$prev = "Prev";
			$next = "";
		}
		$stmt->execute();
		$results = [];
		$anchors = [];
	
		while($result = $stmt->fetch(PDO::FETCH_NUM)) {
			array_push($results, $result);
		}

		$data['results'] = $results;
		$data['anchors'] = [$prev, $next];
		$data['counter'] = $counter;
		return $data;
	}
	extract(pageController($dbc));
	if(!empty($_POST)){
		if(Input::get('name') === '') {
			echo 'Please enter a name.'.PHP_EOL;
		} 
		if(Input::get('location') === '') {
			echo 'Please enter a location.'.PHP_EOL;
		} 
		if(Input::get('date_established') === '') {
			echo 'Please enter a date that the park was established.'.PHP_EOL;
		} 
		if(Input::get('area_in_acres') === '') {
			echo 'Please enter the area in acres.'.PHP_EOL;
		} 
		if(Input::get('location') === '') {
			echo 'Please enter a location.'.PHP_EOL;
		} 
		if(Input::get('description') === '') {
			echo 'Please enter a description.'.PHP_EOL;
		} else if(Input::has('name') && Input::has('location') && Input::has('date_established') && Input::has('area_in_acres') && Input::has('description')){
			$stmt = $dbc->prepare("INSERT INTO national_parks (name, location, date_established, area_in_acres,description) VALUES (:name, :location, :date_established, :area_in_acres, :description)");
			$stmt->bindValue(':name', Input::get('name'), PDO::PARAM_STR);
			$stmt->bindValue(':location', Input::get('location'), PDO::PARAM_STR);
			$stmt->bindValue(':date_established', Input::get('date_established'), PDO::PARAM_STR);
			$stmt->bindValue(':area_in_acres', Input::get('area_in_acres'), PDO::PARAM_STR);
			$stmt->bindValue(':description', Input::get('description'), PDO::PARAM_STR);
			$stmt->execute();
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>National Parks</title>
	<meta charset='utf8'>
	<link rel='stylesheet' href='/css/bootstrap.min.css'>
	<link rel='stylesheet' href='/css/national_parks.css'
</head>
<body>
	<h1>National Parks</h1>
	<table class='table table-striped'>
		<tr>
			<th>Name</th>
			<th>Location</th>
			<th>Date established</th>
			<th>Area in Acres</th>
			<th>Description</th>
		</tr>
		<?php foreach($results as $result): ?>
			<tr>
				<td><?= $result[1] ?></td>
				<td><?= $result[2] ?></td>
				<td><?= $result[3] ?></td>
				<td><?= $result[4] ?></td>
				<td><?= $result[5] ?></td>
			</tr>
		<?php endforeach?>
	</table>
	<a href="/national_parks.php?counter=<?= $counter - 1?>"><?= $anchors[0] ?></a>
	<a href="/national_parks.php?counter=<?= $counter + 1?>"><?= $anchors[1] ?></a>
	<div class='form'>
		<h2>Add a National Park</h2>
		<form method='POST' action='national_parks.php'>
			<div class='form-group'>
				<label for='name'>Name</label>
				<input type='text' name='name' id='name' class='form-control' placeholder='Name of a National Park.'>
			</div>
			<div class='form-group'>
				<label for='location'>Location</label>
				<input type='text' name='location' id='location' class='form-control'  placeholder='Address'>
			</div>
			<div class='form-group'>
				<label for='date_established'>Date Established</label>
				<input type='text' name='date_established' id='date_established' class='form-control'  placeholder	='YYYY/MM/DD'>
			</div>
			<div class='form-group'>
				<label for='area_in_acres'>Area in Acres</label>
				<input type='text' name='area_in_acres' id='area_in_acres' class='form-control' >
			</div>
			<div class='form-group'>
				<label for='description'>Description</label>
				<textarea name='description' id='description' class='form-control' rows='5' cols='40'></textarea>
			</div>
			<button type='submit' class='btn btn-success'>Submit</button>
		</form>
	</div>
</body>
</html>