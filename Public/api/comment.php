<?php

require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}
$commentArr=Comment::fetchAll(); //array
//convert to json and print
$json = json_encode($commentArr, JSON_PRETTY_PRINT);
header('Content-type: application/json');
echo $json;
