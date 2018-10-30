<?php
//API END POINT
require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $clientId = intval($_GET['clientId'] ?? 0);
  if ($clientId < 1) {
    throw new Exception('Invalid Client ID');
  }
  //fetch all contents of the table "comments" into the "$comments" array
  $commentArr=Comment::fetchCommentsByClientId($clientId); //array
  //convert to json and print
  $json = json_encode($commentArr, JSON_PRETTY_PRINT);
  header('Content-type: application/json');
  echo $json;


}
else {
  //Create a new object of the class Comment and insert it into the table "comments"
  $newComment = new Comment($_POST);
  $newComment->insertNewComment();
  echo json_encode($newComment);
}
