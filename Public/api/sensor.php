<?php

require '../../app/common.php';

$sensorArr=Sensor::fetchAll(); //array
//convert to json and print
$json = json_encode($sensorArr, JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo $json;
