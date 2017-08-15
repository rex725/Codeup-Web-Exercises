<?php
	require_once __DIR__ . "/../env.php";
	require_once __DIR__ . "/../db_connect.php";
	require_once __DIR__ . "/../Input.php";
	require_once __DIR__ . "/../Park.php";
	function pageController($dbc) {
		$pageNo = (int) Input::get('pageNo', 0);
		$results = [];
		$prev = "";
		$next = "";
		Park::dbConnect();
		if($pageNo <= 0) {
			$prev = "";
			$next = "Next";
		}else if(Park::count() % 4 === 0) {
			if(Park::count() / 4 === $pageNo + 1) {
				$prev = "Prev";
				$next = "";	
			} else if($pageNo >= 1) {
				$prev = "Prev";
				$next = "Next";
			}

		}else if(count(Park::paginate($pageNo)) < 4)  {
			$prev = "Prev";
			$next = "";	
		}else if($pageNo >= 1) {
			$prev = "Prev";
			$next = "Next";
		}
		$data['results'] = Park::paginate($pageNo);
		$data['anchors'] = [$prev, $next];
		$data['pageNo'] = $pageNo;
		return $data;

		$park = new Park();	
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
			if(Input::get('description') === '') {
				echo 'Please enter a description.'.PHP_EOL;
			} else if(Input::has('name') && Input::has('location') && Input::has('date_established') && Input::has	('area_in_acres') && Input::has('description')) {
				$park->name = Input::get('name');
				$park->location = Input::get('location');
				$park->dateEstablished = Input::get('date_established');
				$park->areaInAcres = Input::get('area_in_acres');
				$park->description = Input::get('description');
				$park->insert();
			}
		}
	}
	extract(pageController($dbc));
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
	<a href="/national_parks.php?pageNo=<?= $pageNo - 1?>"><?= $anchors[0] ?></a>
	<a href="/national_parks.php?pageNo=<?= $pageNo + 1?>"><?= $anchors[1] ?></a>
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