<?php
class SiteTurbine
{
	public $siteId;
  public $clientId;
  public $siteName;
  public $siteDescription;
	public $primaryContact;
	public $capacity;
  public $commericialDate;
  public $addrLine1;
  public $addrLine2;
  public $addrCity;
  public $addrState;
  public $addrZip;
  public $addrCountry;
	public $turbineDeployedId;
  public $turbineId;
  public $siteId;
  public $serialNumber;
  public $deployedDate;
  public $totalFiredHours;
  public $totalStarts;
  public $lastPlannedOutageDate;
  public $lastUnplannedOutageDate;

	public function __construct($row)
	{
		$this->siteId = isset($row['siteId']) ? intval($row['siteId']) : null;
    $this->clientId = $row['clientId'];
    $this->siteName = $row['siteName'];
    $this->siteDescription = $row['siteDescription'];
    $this->capacity = $row['capacity'];
    $this->commericialDate = $row['commercialDate'];
    $this->addrLine1 = $row['addrLine1'];
    $this->addrLine2 = $row['addrLine2'];
    $this->addrCity = $row['addrCity'];
    $this->addrState = $row['addrState'];
    $this->addrZip = $row['addrZip'];
    $this->addrCountry = $row['addrCountry'];
		$this->turbineDeployedId = $row['turbineDeployedId'];
    $this->turbineId = $row['turbineId'];
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
    $this->totalFiredHours = $row['totalFiredHours'];
    $this->totalStarts = $row['totalStarts'];
    $this->lastPlannedOutageDate = $row['lastPlannedOutageDate'];
    $this->lastUnplannedOutageDate = $row['lastUnplannedOutageDate'];
	}

	public static function fetchSiteTurbineByClientId(int $clientId)
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM siteTurbine WHERE clientId=?;';
		$statement = $db->prepare($sql);
		$success = $statement->execute([$clientId]);
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$siteItem = new SiteTurbine($row);
			array_push($arr, $siteItem);
		}
		return $arr;
	}
}
