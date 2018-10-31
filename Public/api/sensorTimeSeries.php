<?php

require '../../app/common.php';

$sensorDeployedId = intval($_GET['sensorDeployedId'] ?? 0);
if ($sensorDeployedId < 1) {
  throw new Exception('Invalid $sensorDeployedId');
}
  //gets data that is fetched by the Site Model from the SQL database
  $sensorArr=SensorTimeSeries::fetchKPIBySensorDeployedId($sensorDeployedId);
  //convert to json and print
  $json = json_encode($sensorArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
