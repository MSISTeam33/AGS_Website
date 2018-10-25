<?php

require '../../app/common.php';

  $clientArr=Client::fetchClients(); //array
  //convert to json and print
  $json = json_encode($clientArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
