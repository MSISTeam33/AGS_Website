<?php

require '../../app/common.php';

  $sensorDeployedId = $_GET['sensorDeployedId'];
  //gets data that is fetched by the Site Model from the SQL database
  $sArr=StartsTrips::fetchStartsTripsBySensorDeployedId($sensorDeployedId);
  //convert to json and print
  $json = json_encode($sArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
