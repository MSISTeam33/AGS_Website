<?php

require '../../app/common.php';

  $siteId = intval($_GET['siteId'] ?? 0);
  if ($siteId < 1) {
    throw new Exception('Invalid Site ID');
  }
  //gets data that is fetched by the TurbineInfo Model from the SQL database
  $turbineArr=TurbineInfo::fetchTurbinesBySiteId($siteId);
  //convert to json and print
  $json = json_encode($turbineArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
