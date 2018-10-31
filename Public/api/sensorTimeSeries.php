<?php

require '../../app/common.php';

$turbineDeployedId = intval($_GET['sensorDeployedId'] ?? 0);
if ($turbineDeployedId < 1) {
  throw new Exception('Invalid $sensorDeployedId');
}
  //gets data that is fetched by the Site Model from the SQL database
  $sensorArr=SensorTimeSeries::fetchSensorsBySensorDeployedId($sensorDeployedId);
  //convert to json and print
  $json = json_encode($sensorArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
