<?php

require_once "env.php";
require_once "Park.php";

Park::dbConnect();

Park::$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";

$query = "
	DROP TABLE IF EXISTS national_parks;

	CREATE TABLE national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(240) NOT NULL,
    location VARCHAR(50) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
	)";

Park::$dbc -> exec($query);