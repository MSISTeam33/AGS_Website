<?php

require '../../app/common.php';

  $siteArr=Site::fetchAll(); //array
  //convert to json and print
  $json = json_encode($siteArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
