<?php
// this is the query with the various items and suggestions 
 $products[] = "Car";
 $products[] = "Jar";
 $products[] = "T-shirt";
 $products[] = "Shorts";
 $products[] = "Pants";
 $products[] = "Computers";
 $products[] = "Hats";
 $products[] = "Tops";
 $products[] = "Sleeveless";
 $products[] = "Turtlenecks";
 $products[] = "Mouse";
 $products[] = "Keyboard";
 $products[] = "Elecronics";
 $products[] = "Surfboard";
 $products[] = "Keyholder";
 $products[] = "Desk";
 $products[] = "Chair";
 $products[] = "Pot";
 $products[] = "Cart";
 $products[] = "phone";
 $products[] = "Laptops";
 $products[] = "Fannypack";
 $products[] = "Headphones";
 $products[] = "Headsets";
 $products[] = "Usb";
 $products[] = "Umbrella";
 $products[] = "Rings";
 $products[] = "Toy Planes";
 $products[] = "toys";
 $products[] = "Stuffed Bears";
 $products[] = "Stuffed Turtles";
 $products[] = "Stuffed Raindeers";
 $products[] = "Flowers";
 $products[] = "Face Creme";
 $products[] = "Hand Creme";
 $products[] = "Body Creme";
 $products[] = "Night Gown";
 $products[] = "Night Vision Googles";
 $products[] = "Skateboards";
 $products[] = "Door";
 $products[] = "Plug";
 $products[] = "Outlet";
 $products[] = "Book";
 $products[] = "Stapler";
 $products[] = "Holepuncher";
 $products[] = "Pillow";
 $products[] = "Bed";
 $products[] = "Mattress";
 $products[] = "Bed-frame";
 $products[] = "Cups";
 $products[] = "Jugs";
 $products[] = "Lamps";
 $products[] = "Lava-lamps";
 $products[] = "Chargers";
 $products[] = "Blankets";

 //this gets the first letter that was entered
 $word = $_REQUEST["word"];

 $suggestion = "";
//this does all the checking to see if the word matches any of the query results if so it will return the word otherwise it will return no suggestions
 if($word !== "")
 {
     $word = strtolower($word);
     $len = strlen($word);

     foreach($products as $product)
     {
         if(stristr($word, substr($product, 0, $len)))
         {
             if($suggestion == "")
             {
                $suggestion = $product;
             }
             else{
                 $suggestion .= ", $product";
             }
         }
     }
 }

 if($suggestion == "")
 {
     echo "No suggestions we are sorry";
 } 
 else{
     echo $suggestion;
 }

?>