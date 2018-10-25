<?php

require '../../app/common.php';

  //gets data that is fetched by the Client Model from the SQL database
  $clientArr=Client::fetchClients(); 
  //convert to json and print
  $json = json_encode($clientArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
