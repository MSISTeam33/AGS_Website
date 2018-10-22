<?php

require '../../app/common.php';

$turbineArr=Turbine::fetchAll(); //array
//convert to json and print
$json = json_encode($turbineArr, JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo $json;
