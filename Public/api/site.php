<?php
//API END POINT
require '../../app/common.php';


  //fetch all contents of the table "comments" into the "$comments" array
  $siteArr=Site::fetchSites(); //array
  //convert to json and print
  $json = json_encode($siteArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
