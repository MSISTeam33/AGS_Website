<?php

require '../../app/common.php';

  //gets data that is fetched by the GeneratorList Model from the SQL database
  $generatorListArr=GeneratorList::fetchGeneratorList();
  //convert to json and print
  $json = json_encode($generatorListArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
