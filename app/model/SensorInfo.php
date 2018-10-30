<?php
//Model to fetch info about sensors deployed

class SensorInfo
{
    public $sensorDeployedId;
    public $sensorId;
    public $turbineDeployedId;
    public $serialNumber;
    public $deployedDate;
    public $sensorName;
    public $sensorDescription;
    public $manufacturer;
    public $totalLifeExpentancyHours;

  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->sensorId = $row['sensorId'];
    $this->turbineDeployedId = $row['turbineDeployedId'];
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
    $this->sensorName = $row['sensorName'];
    $this->sensorDescription = $row['sensorDescription'];
    $this->manufacturer = $row['manufacturer'];
    $this->sensorNametotalLifeExpentancyHours = $row['totalLifeExpentancyHours'];
  }

  public static function fetchSensorsByTurbineId() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM sensorInfo where turbineDeployedId=?';
    $statement = $db->prepare($sql);
    $success = $statement->execute([$turbineDeployedId]);
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $sensorItem =  new SensorInfo($row);
      array_push($arr, $sensorItem);
    }
    return $arr;
  }
}
