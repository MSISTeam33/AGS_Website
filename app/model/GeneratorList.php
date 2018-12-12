<?php
class GeneratorList
{
	public $gd_Id;
  public $gd_cust_Id;
  public $gd_gen_model;
  public $gd_status;
	public $gen_freq;
	public $gen_standby;
  public $gen_prime;
  public $gen_industry;
	public $gen_description;

	public function __construct($row)
	{
		$this->gd_Id = isset($row['gd_Id']) ? $row['gd_Id'] : null;
    $this->gd_cust_Id = $row['gd_cust_Id'];
    $this->gd_gen_model = $row['gd_gen_model'];
    $this->gd_status = $row['gd_status'];
		$this->gen_freq=$row['gen_freq'];
    $this->gen_standby = $row['gen_standby'];
    $this->gen_prime = $row['gen_prime'];
    $this->gen_industry = $row['gen_industry'];
		$this->gen_description = $row['gen_description'];
	}

	public static function fetchGeneratorList()
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM generator_list_view;';
		$statement = $db->prepare($sql);
		$success = $statement->execute([]);
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$generatorListItem = new GeneratorList($row);
			array_push($arr, $generatorListItem);
		}
		return $arr;
	}
}
