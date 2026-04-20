<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exp FlexGrid/Box</title>
  <link rel="stylesheet" href="sidepro.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body>

<!-- ===== NAV ===== -->
<nav class="flexboxnavi">
    
  <div class="nav-left">
    <a href="menu.php" class="flexboxnaviitems">Menu</a> <!--To go to the menu page-->
    <a href="#" class="flexboxnaviitems">Rewards</a>
    <a href="#" class="flexboxnaviitems">Gift Cards</a>
  </div>

  <div class="nav-right">
    <input type="text" placeholder="Search..." class="search-bar">
    <a href="#" class="flexboxnaviitems">Find a store</a>
    <a href="#" class="flexboxnaviitems">Sign in</a>
    <a href="#" class="flexboxnaviitems join">Join Now</a>
  </div>
</nav>

<!-- ===== SECTION 1 ===== -->
<div class="FlexboxSections">

  <div class="flextext">
    <h1>It's a great day for free coffee</h1>
    <p>Sign up and start enjoying the perks of Starbucks® Rewards.</p>
    <a href="#" class="joinbutton">Join Now</a>
    <p>It's even better <span class="underline">with the app</span>.</p>
  </div>

  <div class="FlexboxContent">
    <img src="Assets/Screenshot%202025-07-24%20004053.png" alt="Tea">
  </div>
</div>

<!-- ===== SECTION 2 ===== -->
<section class="FlexboxSections2">

  <div class="flextext2">
    <h1>Getting started is easy</h1>
    <p>Earn Stars and get rewarded in a few easy steps.</p>
  </div>

  <div class="flexcircle2">

    <div class="grncircle-container">
    <div class="grncircle">
      <span class="circlenum">1</span>
    </div>
    <h3 class="circle-text">Create an account</h3>
    <p>To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.
    </p>
  </div>

    <div class="grncircle-container">
    <div class="grncircle">
      <span class="circlenum">2</span>
    </div>
    <h3 class="circle-text">Order and pay how you’d like</h3>
    <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. |Learn how|
    </p>
  </div>

    <div class="grncircle-container">
    <div class="grncircle">
      <span class="circlenum">3</span>
    </div>
    <h3 class="circle-text">Earn Stars, get Rewards</h3>
    <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
    </p>
  </div>
</div>

<!-- ===== SECTION 3: REWARDS TABS ===== --> 
<section class="FlexboxSections3">

  <h2 class="rewards-title">Get your favorites for free</h2>

  <div class="rewards-tabs">
    <button class="reward-tab Espresso active" data-tab="25">25★</button>
    <button class="reward-tab Iced Matcha" data-tab="100">100★</button>
    <button class="reward-tab Coldbrew" data-tab="200">200★</button>
    <button class="reward-tab Protien Box" data-tab="300">300★</button>
    <button class="reward-tab White Dice" data-tab="400">400★</button>
  </div>

  <div class="reward-content active" id="reward-25">
    <img src="Assets/EspressoCoffee-Class.webp" alt="Espresso">
    <div>
      <h3>Customize your drink</h3>
      <p>Make your drink just right with an extra espresso shot or a dash of your favorite syrup.</p>
    </div>
  </div>

  <div class="reward-content" id="reward-100">
    <img src="Assets/Iced Matcha.jpg" alt="Iced Matcha in a glass cup">
    <div>
      <h3>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h3>
      <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more..</p>
    </div>
  </div>

  <div class="reward-content" id="reward-200">
    <img src="Assets/Coldbrew.jpg" alt="A Coldbrew sitting in the sun">
    <div>
      <h3>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h3>
      <p>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
    </div>
  </div>

  <div class="reward-content" id="reward-300">
    <img src="Assets/ProteinBox.jpg" alt="A ProteinBox">
    <div>
      <h3>Sandwich, protein box or at-home coffee</h3>
      <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>
    </div>
  </div>

  <div class="reward-content" id="reward-400">
    <img src="Assets/BestChoice.jpg" alt="A bunch of food items from StarBucks">
    <div>
      <h3>Select Starbucks® merchandise</h3>
      <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
    </div>
  </div>

                                            

</section>

<!-- ===== SECTION 4: Endless Extras ===== -->
 <!-- <h2 class="rewards-title">Endless Extras</h2> -->


 <!-- ===== JS ===== -->
<script>
  const tabs = document.querySelectorAll(".reward-tab");
  const contents = document.querySelectorAll(".reward-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(`reward-${tab.dataset.tab}`)
              .classList.add("active");
    });
  });
</script>

</body>
</html>
