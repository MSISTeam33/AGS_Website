<?php

require '../../app/common.php';

$sensorDeployedId = $_GET['sensorDeployedId'];
echo $sensorDeployedId;
  //gets data that is fetched by the Site Model from the SQL database
  $sensorArr=SensorTimeSeries::fetchKPIBySensorDeployedId($sensorDeployedId);
  //convert to json and print
  $json = json_encode($sensorArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
