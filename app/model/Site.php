<?php
class Client
{
  public $siteId;
  public $clientId;
  public $siteName;
  public $siteDescription;
  public $capacity;
  public $commericialDate;
  public $addrLine1;
  public $addrLine2;
  public $addrCity;
  public $addrState;
  public $addrZip;
  public $addrCountry;

  public function __construct($row) {
    $this->siteId = isset($row['siteId']) ? intval($row['siteId']) : null;
    $this->clientId = $row['clientId'];
    $this->siteName = $row['siteName'];
    $this->siteDescription = $row['siteDescription'];
    $this->capacity = $row['capacity'];
    $this->commericialDate = $row['commercialDate'];
    $this->addrLine1 = $row['addrLine1'];
    $this->addrLine2 = $row['addrLine2'];
    $this->addrCity = $row['addrCity'];
    $this->addrState = $row['addrState'];
    $this->addrZip = $row['addrZip'];
    $this->addrCountry = $row['addrCountry'];
  }

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM site';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $siteItem =  new Site($row);
      array_push($arr, $siteItem);
    }
    return $arr;
  }
}
