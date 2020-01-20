if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var addToCartButtons = document.getElementsByClassName("red-hollow-btn1");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem =
    button.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  var title = shopItem.getElementsByClassName("item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imgSrc = shopItem.getElementsByClassName("bape-image")[0].src;
  console.log(title, price, imgSrc);
  addItemToCart(title, price, imgSrc);
}

function addItemToCart(title, price, imgSrc) {
  var cartRow = document.createElement("div");
  cartRow.innerText = title;
  var cartItems = document.getElementsByClassName("shopping-cart")[0];
  cartItems.appendChild(cartRow);
}
