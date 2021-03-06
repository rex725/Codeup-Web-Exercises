<?php

/**
 * A Class for interacting with the national_parks database table
 *
 * contains static methods for retrieving records from the database
 * contains an instance method for persisting a record to the database
 *
 * Usage Examples
 *
 * Retrieve a list of parks and display some values for each record
 *
 *      $parks = Park::all();
 *      foreach($parks as $park) {
 *          echo $park->id . PHP_EOL;
 *          echo $park->name . PHP_EOL;
 *          echo $park->description . PHP_EOL;
 *          echo $park->areaInAcres . PHP_EOL;
 *      }
 * 
 * Inserting a new record into the database
 *
 *      $park = new Park();
 *      $park->name = 'Acadia';
 *      $park->location = 'Maine';
 *      $park->areaInAcres = 48995.91;
 *      $park->dateEstablished = '1919-02-26';
 *
 *      $park->insert();
 *
 */
class Park
{

    ///////////////////////////////////
    // Static Methods and Properties //
    ///////////////////////////////////

    /**
     * our connection to the database
     */
    public static $dbc = null;

    /**
     * establish a database connection if we do not have one
     */
    public static function dbConnect() {
        require 'db_connect.php';
        if (! is_null(self::$dbc)) {
            return;
        }
        self::$dbc = new PDO("mysql:host=127.0.0.1;dbname=" . dbName, username, password);;
    }

    /**
     * returns the number of records in the database
     */
    public static function count() {
        self::dbConnect();
        $stmt = self::$dbc->query("SELECT COUNT(id) FROM national_parks");
        return $stmt->fetchColumn();
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for the
        //       number of existing park records
    }

    /**
     * returns all the records
     */
    public static function all() {
        self::dbConnect();
        $stmt = self::$dbc->query("SELECT * FROM national_parks");
        $results = [];
        while($result = $stmt->fetch(PDO::FETCH_NUM)) {
            array_push($results, $result);
        }
        $data['results'] = $results;
        return $data;
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to query the database for all the
        //       records in the parks table
        // TODO: iterate over the results array and transform each associative
        //       array into a Park object
        // TODO: return an array of Park objects
    }

    /**
     * returns $resultsPerPage number of results for the given page number
     */
    public static function paginate($pageNo, $resultsPerPage = 4) {
        self::dbConnect();
        $stmt = self::$dbc->prepare("SELECT * FROM national_parks ORDER BY name LIMIT :limitValue OFFSET :offsetValue");
        $stmt->bindValue(':limitValue', $resultsPerPage, PDO::PARAM_INT);
        $stmt->bindValue(':offsetValue', $pageNo*4, PDO::PARAM_INT);
        $stmt->execute();
        $results = [];
        while($result = $stmt->fetch(PDO::FETCH_NUM)) {
            array_push($results, $result);
        }
        return $results;
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: calculate the limit and offset needed based on the passed
        //       values
        // TODO: use the $dbc static property to query the database with the
        //       calculated limit and offset
        // TODO: return an array of the found Park objects
    }

    /////////////////////////////////////
    // Instance Methods and Properties //
    /////////////////////////////////////

    /**
     * properties that represent columns from the database
     */
    public $id;
    public $name;
    public $location;
    public $dateEstablished;
    public $areaInAcres;
    public $description;

    /**
     * inserts a record into the database
     */
    public function insert() {
        $stmt = self::$dbc->prepare("INSERT INTO national_parks (name, location, date_established, area_in_acres,description) VALUES (:name, :location, :date_established, :area_in_acres, :description)");
        $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
        $stmt->bindValue(':location', $this->location, PDO::PARAM_STR);
        $stmt->bindValue(':date_established', $this->dateEstablished, PDO::PARAM_STR);
        $stmt->bindValue(':area_in_acres', $this->areaInAcres, PDO::PARAM_STR);
        $stmt->bindValue(':description', $this->description, PDO::PARAM_STR);
        $stmt->execute();
        $this->id = self::$dbc->lastInsertId();
        // TODO: call dbConnect to ensure we have a database connection
        // TODO: use the $dbc static property to create a perpared statement for
        //       inserting a record into the parks table
        // TODO: use the $this keyword to bind the values from this object to
        //       the prepared statement
        // TODO: excute the statement and set the $id property of this object to
        //       the newly created id
    }
}
