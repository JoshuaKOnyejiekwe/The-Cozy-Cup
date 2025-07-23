<?php /* <? opens and closes in php ?> */
session_start();

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "sideproject_db";
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Exp FlexGrid/Box</title>
    <link rel="stylesheet" href="sidepro.css">
</head>
<body>
	<div class="flexboxnavi">
        <div class="flexboxnaviitems">Home</div>
        <div class="flexboxnaviitems">About</div>
        <div class="flexboxnaviitems">Contact</div>
    </div>

    <div class="FlexGridSections">
        <div class="FlexGridContent" id="box1">Content1</div>
        <div class="FlexGridContent" id="box2">Content2</div>
        <div class="FlexGridContent" id="box3">Content3</div>
        <div class="FlexGridContent" id="box4">Content4</div>
        <div class="FlexGridContent" id="box5">Content5</div>
        <div class="FlexGridContent" id="box6">Content6</div>
        <div class="FlexGridContent" id="box7">Content7</div>
        <div class="FlexGridContent" id="box8">Content9</div>
    </div>
</body>
</html>
