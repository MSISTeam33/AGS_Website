<?php
class Client
{
  public $clientId;
  public $clientName;
  public $clientDescription;
  public $gicsSector;
  public $gicsSubIndustry;
  public $headquarters;

  public function __construct($row) {
    $this->clientId = isset($row['clientId']) ? intval($row['clientId']) : null;
    $this->clientName = $row['clientName'];
    $this->clientDescription = $row['clientDescription'];
    $this->gicsSector = $row['gicsSector'];
    $this->gicsSubIndustry = $row['gicsSubIndustry'];
    $this->headquarters = $row['headquarters'];
  }

  public static function fetchClients() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM client';
    $statement = $db->prepare($sql);
    $success = $statement->execute();
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $clientItem =  new Client($row);
      array_push($arr, $clientItem);
    }
    return $arr;
  }
}
