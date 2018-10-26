<?php
//Model to fetch info about sensors deployed

class SensorDeployed
{
    public $sensorDeployedId;
    public $sensorId;
    public $turbineDeployedId;
    public $serialNumber;
    public $deployedDate;

  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->sensorId = $row['sensorId'];
    $this->turbineDeployedId = $row['turbineDeployedId'];
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
  }

  public static function fetchSensors() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM serverDeployed';
    $statement = $db->prepare($sql);
    $success = $statement->execute();
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $sensorItem =  new SensorDeployed($row);
      array_push($arr, $sensorItem);
    }
    return $arr;
  }
}
