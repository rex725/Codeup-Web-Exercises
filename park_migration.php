<?php

require_once "env.php";

$dbc = new PDO("mysql:host=127.0.0.1;dbname=" . dbName, username, password);

$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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

$dbc -> exec($query);