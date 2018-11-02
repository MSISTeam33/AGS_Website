<?php

require '../../app/common.php';

  $sensorDeployedId = intval($_GET['sensorDeployedId'] ?? 0);
  if ($sensorDeployedId < 1) {
    throw new Exception('Invalid sensorDeployedId');
  }
  //gets data that is fetched by the Site Model from the SQL database
  $sArr=StartsTrips::fetchStartsTripsBySensorDeployedId($sensorDeployedId);
  //convert to json and print
  $json = json_encode($sArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
