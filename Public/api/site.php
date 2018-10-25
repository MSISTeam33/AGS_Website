<?php
//API END POINT
require '../../app/common.php';

$siteArr=Site::fetchSites(); //array
//convert to json and print
$json = json_encode($siteArr, JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo $json;
