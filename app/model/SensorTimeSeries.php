<?php
class SensorTimeSeries
{
  public $sensorDeployedId;
  public $dataCollectedDate;
  public $output;
  public $heatRate;
  public $compressorEfficiency;
  public $availability;
  public $reliability;
  public $firedHours;
  public $trips;
  public $starts;

  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->dataCollectedDate = $row['dataCollectedDate'];
    $this->output = $row['output'];
    $this->heatRate = $row['heatRate'];
    $this->compressorEfficiency = $row['compressorEfficiency'];
    $this->availability = $row['availability'];
    $this->reliability = $row['reliability'];
    $this->firedHours = $row['firedHours'];
    $this->trips = $row['trips'];
    $this->starts = $row['starts'];
  }

  public static function getSensorTimeSeriesBySensorDeployedId(int $sensorDeployedId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM sensorTimeSeries WHERE sensorDeployedId=?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
      [$sensorDeployedId]
    );
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $sensorTimeSeriesItem =  new sensorTimeSeries($row);
      array_push($arr, $sensorTimeSeriesItem);
    }
    return $arr;
  }
}
