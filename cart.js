let cartCount = 0;
let cartTotal = 0;
function addToCart(productId) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert("Item added to cart!");
}