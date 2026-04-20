<?php
  session_start();
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  include 'firebase_db.php';


  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } else {
      echo "";
  }
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Page</title>
    <link rel="stylesheet" href="the-cozy-cup.css">
    <link rel="stylesheet" href="menu.css"> <!-- menu CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  </head>
  <body>

<!-- ===== INCLUDE NAVBAR ===== -->
<?php include_once 'navbar.php'; ?>

  <div class="menu-page">
    <h1>Our Menu</h1>
    <p>Welcome! Here’s what we have to offer </p>

    
<?php
$sql = "SELECT * FROM menu_item ORDER BY category, name";
$result = $conn->query($sql);

$currentCategory = '';

while ($row = $result->fetch_assoc()) {

    if ($currentCategory != $row['category']) {

        if ($currentCategory != '') {
            echo '</div>';
        }

        $currentCategory = $row['category'];

        echo '<h2 class="menu-category">'.$currentCategory.'</h2>';
        echo '<div class="menu-items">';
    }

    # CLICKABLE CARD
    echo '<a href="productdetails.php?id='.$row['id'].'" class="menu-link">';

    echo '<div class="menu-item-card">';
    echo '<img src="'.$row['image'].'" alt="'.$row['name'].'">';
    echo '<h3>'.$row['name'].'</h3>';
    echo '<p>'.$row['description'].'</p>';
    echo '</div>';

    echo '</a>';
}

echo '</div>';
?>

    <!-- Coffee --
    <h2 class="menu-category">Coffee</h2>
    <div class="menu-items">
      <div class="menu-item-card">
      <img src="Assets/EspressoCoffee-Class.webp" alt="An Espresso in a glass cup with a spoon">
        <h3>Espresso</h3>
        <p>Rich and bold espresso shots.</p>
      </div>



      <div class="menu-item-card">
        <img src="Assets/Coldbrew.jpg" alt="A Cold Brew in a round glass cup">
        <h3>Cold Brew</h3>
        <p>Slow-steeped, smooth, and never bitter.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Americano.jpg" alt="">
        <h3>Americano</h3>
        <p>Espresso softened with hot water. Clean and full-bodied.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Black Coffee.jpg" alt="">
        <h3>Black Coffee</h3>
        <p>Simple, fresh-brewed, and straight to the point.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/latte.jpg" alt="">
        <h3>Latte</h3>
        <p>Creamy steamed milk with a smooth espresso base.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Cortado.jpg" alt="">
        <h3>Cortado</h3>
        <p>Equal parts espresso and warm milk. Bold and balanced.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Cappuccino.jpg" alt="">
        <h3>Cappuccino</h3>
        <p>Bold espresso topped with thick, velvety foam.</p>
      </div>


<!-- ----------------------------------------------------------------------------------------------- --


      <!-- COLD DRINKS --
      <h2 class="menu-category">Cold Drinks</h2>
      <div class="menu-item-card">
      <img src="Assets/Strawberry-Acai-Refresher.webp" alt="A Cold Brew in a round glass cup">
        <h3>Strawberry Açaí Refresher</h3>
        <p>Sweet, fruity, and lightly caffeinated.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Mango-Dragonfruit-Refresher.jpg" alt="">
        <h3>Mango Dragonfruit Refresher</h3>
        <p>Bright, tropical, and refreshingly sweet.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Chik-Fil-A-peach-milkshake.jpg" alt="">
        <h3>Peach Milkshake</h3>
        <p>Creamy, tangy, and sun-sweet.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/StarbucksPinkDrink-jpg.jpg" alt="">
        <h3>Pink Drink</h3>
        <p>Fruity Strawberry Açaí blended with cool coconut milk.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Lemonade.jpg" alt="">
        <h3>Lemonade</h3>
        <p>Tart, sweet, and ice-cold.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Iced Tea.jpg" alt="">
        <h3>Iced Tea</h3>
        <p>Crisp, lightly sweetened, and always refreshing.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Iced Matcha.jpg" alt="">
        <h3>Iced Matcha Latte</h3>
        <p>Earthy matcha blended with cold milk over ice.</p>
      </div>


<!-- ----------------------------------------------------------------------------------------------- -->


      <!-- Pastries --
      <h2 class="menu-category">Pastries</h2>
      <div class="menu-item-card">
      <img src="Assets/Banna Bread.jpg" alt="">
        <h3>Banana Bread Slice</h3>
        <p>Flaky and buttery.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Cinnamon Rolls.jpg" alt="">
        <h3>Cinnamon Roll</h3>
        <p>Oven-warm and topped with a generous swirl of vanilla icing.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Blueberry Scones.jpg" alt="">
        <h3>Blueberry Scone</h3>
        <p>Tender crumb with fresh blueberries.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Moist Coffee Cake with Cinnamon Streusel.jpg" alt="">
        <h3>Coffee Cake</h3>
        <p>Vanilla cake with a cinnamon streusel topping.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Muffin.jpg" alt="">
        <h3>Muffins</h3>
        <p>Golden topped and bakery-fresh every morning</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/Apple Turnovers.jpg" alt="">
        <h3>Apple Turnover</h3>
        <p>Flaky pastry filled with warm spiced apples.</p>
      </div>



      <div class="menu-item-card">
      <img src="Assets/croissants.jpg" alt="">
        <h3>Butter Croissant</h3>
        <p>Golden, buttery, and perfectly flaky.</p>
      </div>


    </div>
  </div>

  </body>
  </html>

-->