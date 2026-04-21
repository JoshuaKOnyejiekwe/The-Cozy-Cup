<!-- ?php
include 'sideproject_db.php';

# Page reads that ID
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

# Query uses that ID
$result = $conn->query("SELECT * FROM menu_item WHERE id=$id");

if ($result && $result->num_rows > 0) {
    $item = $result->fetch_assoc();
} else {
    echo "Product not found";
    exit;
}
? -->


<!DOCTYPE html>
<html lang="en">

<!--?php include_once 'navbar.php'; ? -->      <!-- ===== INCLUDE NAVBAR ===== -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <title> ?php echo $item['name']; ? </title> -->
  <title>Product Details</title>
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="productdetails.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<!-- Nav injected by navbar.js -->
 
  <!-- Product content injected by productdetails.js -->
  <div id="product-page" class="product-page">
    <p>Loading product...</p>
  </div>
 
  <script type="module" src="productdetails.js"></script>
 
</body>
</html>


<!-- <div class="product-page">

  <div class="image-card">
    <img src="?= $item['image'] ?>" class="product-img">
  </div>

  <div class="product-info">
    <h1>?= $item['name'] ?></h1>

    <div class="product-desc-box">
      <h4>Description</h4>
      <p>?= $item['description'] ?></p>
    </div>

    <h2 class="price">$?= number_format($item['price'], 2) ?></h2>
  </div>

</div> --
