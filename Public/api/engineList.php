<?php

require '../../app/common.php';

  //gets data that is fetched by the EngineList Model from the SQL database
  $engineListArr=EngineList::fetchEngineList();
  //convert to json and print
  $json = json_encode($engineListArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
