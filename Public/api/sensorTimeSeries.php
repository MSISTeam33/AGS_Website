<?php

require '../../app/common.php';

$sesorDeployedId = intval($_GET['sensorDeployedId'] ?? 0);

// 1. Go to the database and get all work associated with the $taskId
$sensorTimeSeriesArr = Turbine::getSensorTimeSeriesBySensorDeployedId($sensorDeployedId);
// 2. Convert to JSON
$json = json_encode($sensorTimeSeriesArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
