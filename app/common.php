<?php
chdir (__DIR__);
set_include_path(__DIR__);

if ($_SERVER['REQUEST_METHOD'] == 'POST'
&& stripos($_SERVER['CONTENT_TYPE'], 'application/json') !== false ) {
  $_POST = json_decode(file_get_contents('php://input'), true);
}

require 'environment.php';

/** Models **/
require 'model/Client2.php';
require 'model/Comment.php';
require 'model/SensorTimeSeries.php';
require 'model/StartsTrips.php';

require 'model/EngineList.php';
require 'model/GeneratorList.php';
