<?php
class EngineList
{
	public $ed_Id;
  public $ed_cust_Id;
  public $en_model;
  public $ed_status;
	public $en_power;
	public $en_torque;
  public $en_certif;
  public $en_industry;
	public $en_desc;

	public function __construct($row)
	{
		$this->ed_Id = isset($row['ed_id']) ? $row['ed_id'] : null;
    $this->ed_cust_Id = $row['ed_cust_id'];
    $this->en_model = $row['ed_en_model'];
    $this->ed_status = $row['ed_status'];
		$this->en_power=$row['en_power'];
    $this->en_torque = $row['en_torque'];
    $this->en_certif = $row['en_certif'];
    $this->en_industry = $row['en_industry'];
		$this->en_desc = $row['en_desc'];
	}

	public static function fetchEngineList()
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM engine_list_view;';
		$statement = $db->prepare($sql);
		$success = $statement->execute([]);
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$engineListItem = new EngineList($row);
			array_push($arr, $engineListItem);
		}
		return $arr;
	}
}
