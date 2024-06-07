<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Image Gallery</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Center the h1 element */
  
  
  </style>
</head>
<body>
  <h1>Responsive Image Gallery</h1>
  <div class="gallery">
    <?php
      $images = glob("images/*.jpg");
     // echo "<div class='container'>";
      foreach ($images as $image) {
        echo "<div class='gallery-item' max-width='25%'>";
        echo "<img src='$image' alt='Image'>";
        echo "</div>";
      }
     // echo "</div>";
    ?>
  </div>
</body>
</html>
