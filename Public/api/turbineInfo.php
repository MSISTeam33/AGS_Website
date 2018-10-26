<?php

require '../../app/common.php';

  //gets data that is fetched by the Turbine Model from the SQL database
  $turbineArr=Turbine::fetchTurbines();
  //convert to json and print
  $json = json_encode($turbineArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
