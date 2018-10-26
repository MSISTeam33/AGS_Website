<?php

require '../../app/common.php';

  $clientId = intval($_GET['clientId'] ?? 0);
  if ($clientId < 1) {
    throw new Exception('Invalid Client ID');
  }
  //gets data that is fetched by the Site Model from the SQL database
  $siteArr=Site::fetchSitesByClientId($clientId);
  //convert to json and print
  $json = json_encode($siteArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;
