<?php
class Comment
{
	public $commentId;
	public $clientId;
	public $commentSection;

	public function __construct($row)
	{
		$this->commentId = isset($row['commentId']) ? intval($row['commentId']) : null;
		$this->clientId = $row['clientId'];
		$this->commentSection = $row['commentSection'];
	}

	public function insertNewComment(){
     $db = new PDO(DB_SERVER, DB_USER, DB_PW);
     $sql = 'INSERT INTO comment_table (clientId, commentSection) VALUES (?,?)';
     $statement = $db->prepare($sql);
     $success = $statement->execute([
     $this-> clientId,
     $this-> commentSection]);
     if(!$success){
       die('bad sql on insert');
     }
     $this->commentId = $db->lastInsertId();
   }

  public static function fetchComments()
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM comment_table;';
		$statement = $db->prepare($sql);
		$success = $statement->execute();
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$commentItem = new Comment($row);
			array_push($arr, $commentItem);
		}
		return $arr;
	}

	public static function fetchCommentsByClientId($clientId)
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM comment_table WHERE clientId=?;';
		$statement = $db->prepare($sql);
		$success = $statement->execute([$clientId]);
		$arr = [];
		while ($row = $statement->fetch(PDO::FETCH_ASSOC))
		{
			$commentItem = new Comment($row);
			array_push($arr, $commentItem);
		}
		return $arr;
	}
}
