$(document).ready(function(){
    // hwhen the show to cart button is clicked it will check to see if the cart items are empty if so it 
    //will display a message saying it is empty other wise it will display the cart item dynammically
    $("#show-cart").click(function(){
        if($("#ul-hidden").children().length == 0)
        {
            $("#no-items").toggle(750);
            $("#hidden-cart").toggle(750);
        }   
        else
            $("#hidden-cart").toggle(750);
    });

    $("#add-to-cart-button").click(function(){
        var div;
        var li;
        var button;
        var span, span2, span3, span4;
        var price = $("#price").text();
        var color = $("#sweater-colors").val();
        var size =  $("#sweater-sizes").val();
        var picture;
        //checks to see which image is in the front
        if($("#trex-black").css("z-index")== 10)
        {
            picture = $("#trex-black").attr("src");
        }
        else if($("#trex-red").css("z-index") == 10)
        {
            picture = $("#trex-red").attr("src");
        }
        else{
            picture = $("#trex-green").attr("src");
        }
         
        var quantity = $("#quantity-list").val();
        quantity = quantity.split(" ");
        var title = $("#main-product-name").text();
        var inStock = $("#stock").text();
        var shipping = $("#shipping").text();

        //creating the first li
        var cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.style.paddingLeft = "5%";
        cartItem.style.paddingRight = "5%";
        cartItem.style.position = "relative";
        div = document.createElement("div");
        div.className = "cart-div-image";

        //adding the image for the shirt
        var image = document.createElement("img");
        image.className = "cart-item-image";
        image.src = picture;
        image.alt = "Trex-picture";
        image.style.width = "7%";
        div.appendChild (image);

        cartItem.appendChild(div); 

        //second div that will be beside the picture
        div = document.createElement("div");
        div.className = "cart-div-info";

        var ul = document.createElement("ul");
        li = document.createElement("li");
        span = document.createElement("span");

        //this is adding teh product title
        ul.className = "theCart";
        span.className = "cart-item-name";
        span.textContent = title;
        li.appendChild(span);
        ul.appendChild(li);

        //this is getting the instock and free shipping
        li = document.createElement("li");
        span = document.createElement("span");

        span.className = "inStock";
        span.textContent = inStock;

        li.appendChild(span);

        span = document.createElement("span");
        span.textContent = " | ";

        li.appendChild(span);

        span = document.createElement("span");
        span.className = "shipping";
        span.textContent = shipping;

        li.appendChild(span);

        ul.appendChild(li);

        // this is for the color span
        li = document.createElement("li");
        span = document.createElement("span");
        span2 = document.createElement("span");
        span3 = document.createElement("span");
        span4 = document.createElement("span");
        
        span.textContent = "Color: ";
        span2.className = "cart-item-color";
        span2.textContent = color;
        span.appendChild(span2);

        li.appendChild(span);

        ul.appendChild(li);

        //this is the size
        li = document.createElement("li");
        span = document.createElement("span");
        span2 = document.createElement("span");

        span.textContent = "Size: ";
        span2.className = "cart-item-size";
        span2.textContent = size.toUpperCase();
        span.appendChild(span2);

        li.appendChild(span);

        ul.appendChild(li);

        //This is the quantity
        li = document.createElement("li");
        span = document.createElement("span");
        span2 = document.createElement("span");
        span3 = document.createElement("span");
        var select = document.createElement("select");

        span.textContent = "Quantity: " + quantity;
        
        

        span2.textContent=" | ";
        span3.textContent = "Remove";
        span3.className = "delete-item";
        span3.id = "cart-remover";

        span3.addEventListener('click', function(){remove(cartItem)}, false);

        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(span3);

        ul.appendChild(li);

        div.appendChild(ul);

        cartItem.appendChild(div);

        // adding the price

        var p = document.createElement("p");
        p.className = "cart-item-price";
        p.textContent = "Price: ";

        span = document.createElement("span");
        span2 = document.createElement("span");

        span.className = "price";
        span.textContent += "Price: CDN ";
        span2.textContent = "$";
        span.appendChild(span2);
        span.textContent += price;
        span.style.position = "absolute";
        span.style.top = "15%";
        span.style.right = "3%";
        cartItem.appendChild(span);

        //adding the buttons proceed to cart 
        var div2 = document.createElement("div");

        button = document.createElement("button");

        button.className = "proceed-cart";
        button.textContent = "Proceed to Cart";
        div.appendChild(button)
        cartItem.appendChild(div);

        //adding the button proceed to checkout
        var div3 = document.createElement("div");
        button = document.createElement("button");

        button.className = "cart-checkout";
        button.textContent = "Proceed to Checkout";
        div3.appendChild(button);
        cartItem.appendChild(div3);

        $("#ul-hidden").append(cartItem);

        $("#hidden-cart").show(750);
    });

    function remove(cartItem)
    {
        cartItem.remove();

        if($("#ul-hidden").children().length == 0)
        {
            $("#no-items").show(500);
        }
    }

});

