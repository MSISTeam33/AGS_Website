<?php

require '../../app/common.php';

$turbineId = intval($_GET['turbineId'] ?? 0);

// 1. Go to the database and get all work associated with the $taskId
$sensorArr = Turbine::getSensorByTurbineId($turbineId);
// 2. Convert to JSON
$json = json_encode($sensorArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
