let cart = [];

function addToCart(id, name, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  renderCart();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const countEl = document.getElementById("cart-count");
  const totalEl = document.getElementById("total-price");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  countEl.innerText = totalCount;

  if (cart.length === 0) {
    itemsEl.innerHTML = "<p>Cart is empty.</p>";
  } else {
    itemsEl.innerHTML = cart
      .map(
        item => `
      <div class="cart-line">
        <span>${item.name} × ${item.qty}</span>
        <span>
          $${(item.price * item.qty).toFixed(2)}
          <button onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">✕</button>
        </span>
      </div>
    `
      )
      .join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalEl.innerText = total.toFixed(2);
}

function openCart() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  drawer.classList.contains("open") ? closeCart() : openCart();
}