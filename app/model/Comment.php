<?php

class Comment
{
  public $commentId;
  public $clientId;
  public $commentSection;
  public function __construct($row) {
    $this->commentId = isset($row['commentId']) ? intval($row['commentId']) : null;
    $this->clientId = $row['clientId'];
    $this->commentSection = $row['commentSection'];
  }


  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT into comments (clientId,commentSection) VALUES (?,?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->clientId,
      $this->commentSection
    ]);
    $this->commentId = $db->lastInsertId();
  }


  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM comments;';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $commentItem =  new Comment($row);
      array_push($arr, $commentItem);
    }
    return $arr;
  }
}
