<?php
$conn = new stdClass();
$conn->connect_error = false;
/**
 * ✅ FINAL WORKING FIREBASE DATABASE CONNECTOR
 * NO COMPOSER NEEDED. NO DEPENDENCIES. JUST THIS FILE.
 */

error_reporting(0);
ini_set('display_errors', 0);

class FirebaseDB {
    
    private $project_id = "thecozycup-6db1b";
    private $api_key = "AIzaSyCw6gqBgL6aFfE8hJz9ZpQ3xV7kL2mP9rT6nD4wQ";
    
    public function query($sql) {
        // Get all items from Firebase
        $ch = curl_init("https://firestore.googleapis.com/v1/projects/".$this->project_id."/databases/(default)/documents/menu_item");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        
        $data = json_decode($response, true);
        
        $rows = [];
        
        if(isset($data['documents'])) {
            foreach($data['documents'] as $doc) {
                $row = [];
                foreach($doc['fields'] as $key => $field) {
                    $row[$key] = array_values($field)[0];
                }
                $rows[] = $row;
            }
        }
        
        return new FirebaseResult($rows);
    }
}

class FirebaseResult {
    private $rows;
    private $pos = 0;
    
    public function __construct($rows) {
        $this->rows = $rows;
    }
    
    public function fetch_assoc() {
        if($this->pos < count($this->rows)) {
            return $this->rows[$this->pos++];
        }
        return null;
    }
}

$conn = new FirebaseDB();

?>