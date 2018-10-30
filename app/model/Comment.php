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

	public function insertNewComment()
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'INSERT into comments (clientId,commentSection) VALUES (?,?)';
		$statement = $db->prepare($sql);
		$success = $statement->execute([$this->clientId, $this->commentSection]);
		$this->commentId = $db->lastInsertId();
	}

  public static function fetchComments()
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT * FROM comments;';
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

	public static function fetchSitesByClientId(int $clientId)
	{
		$db = new PDO(DB_SERVER, DB_USER, DB_PW);
		$sql = 'SELECT commentSection FROM comments WHERE clientId=?;';
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
