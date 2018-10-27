<?php
class TurbineInfo
{
  public $turbineDeployedId;
  public $turbineId;
  public $siteId;
  public $serialNumber;
  public $deployedDate;
  public $totalFiredHours;
  public $totalStarts;
  public $lastPlannedOutageDate;
  public $lastUnplannedOutageDate;

  public function __construct($row) {
    $this->turbineDeployedId = isset($row['turbineDeployedId']) ? intval($row['turbineDeployedId']) : null;
    $this->turbineId = $row['turbineId'];
    $this->siteId = $row['siteId'];
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
    $this->totalFiredHours = $row['totalFiredHours'];
    $this->totalStarts = $row['totalStarts'];
    $this->lastPlannedOutageDate = $row['lastPlannedOutageDate'];
    $this->lastUnplannedOutageDate = $row['lastUnplannedOutageDate'];
  }

  public static function fetchTurbines() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM turbineDeployed';
    $statement = $db->prepare($sql);
    $success = $statement->execute();
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $turbineItem =  new Turbine($row);
      array_push($arr, $turbineItem);
    }
    return $arr;
  }

  public static function fetchTurbinesBySiteId(int $siteId)
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM turbineDeployed WHERE siteId=?;';
		$statement = $db->prepare($sql);
		$success = $statement->execute([$siteId]);
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$turbineItem = new TurbineInfo($row);
			array_push($arr, $turbineItem);
		}
		return $arr;
	}
}
