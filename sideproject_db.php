<!--SideProject-->
<? php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "sideproject_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>