<?php
/**
 * ONE CLICK MIGRATION SCRIPT
 * Copy ALL your menu items from phpMyAdmin to Firebase automatically
 * Just run this file ONCE in your browser
 */

// Load existing local database
include 'sideproject_db.php';

// Load Firebase
require __DIR__ . '/vendor/autoload.php';
use Kreait\Firebase\Factory;

echo "<h3>Starting migration from phpMyAdmin to Firebase...</h3>";

// Connect to Firebase
$factory = (new Factory)
    ->withServiceAccount(__DIR__.'/firebase-service-account.json');

$firestore = $factory->createFirestore();
$collection = $firestore->collection('menu_item');

// Get ALL items from local database
$sql = "SELECT * FROM menu_item";
$result = $conn->query($sql);

$count = 0;

while($row = $result->fetch_assoc()) {
    
    // Remove local id, let Firebase generate it
    unset($row['id']);
    
    // Add document to Firebase
    $collection->add($row);
    
    echo "✅ Imported: " . $row['name'] . " ($".$row['price'].")<br>";
    $count++;
}

echo "<br><br>";
echo "<h2>✅ MIGRATION COMPLETED SUCCESSFULLY!</h2>";
echo "<h3>Total items copied: " . $count . "</h3>";
echo "<p>All your menu items are now in Firebase.</p>";
echo "<p>Now just change your include from 'sideproject_db.php' to 'firebase_db.php' and you are done!</p>";

?>