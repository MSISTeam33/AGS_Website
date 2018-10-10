<?php

require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$newClient = new Client($_POST);
$newClient->create();
echo json_encode($newClient);
}

$clientArr=Client::fetchAll(); //array
//convert to json and print
$json = json_encode($clientArr, JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo $json;

//To do: figure out whether should we get client by client_id?
