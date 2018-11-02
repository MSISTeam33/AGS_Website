<?php
class StartsTrips
{
  public $sensorDeployedId;
  public $tripsPercentage;
  public $startsPercentage;

  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->tripsPercentage = $row['tripsPercentage'];
    $this->$startsPercentage = $row['$startsPercentage'];
  }

  public static function fetchStartsTripsBySensorDeployedId() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM startsTrips where sensorDeployedId=?;';
    $statement = $db->prepare($sql);
    $success = $statement->execute([$sensorDeployedId]);
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $percentageItem =  new StartsTrips($row);
      array_push($arr, $percentageItem);
    }
    return $arr;
  }
}
