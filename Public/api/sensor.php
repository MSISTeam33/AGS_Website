<?php

require '../../app/common.php';

  //gets data that is fetched by the Site Model from the SQL database
  $sensorArr=SensorDeployed::fetchSensors();
  //convert to json and print
  $json = json_encode($sensorArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
