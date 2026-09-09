const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, img: "https://png.pngtree.com/png-clipart/20250415/original/pngtree-wireless-headphone-png-image_20721964.png" },
  { id: 2, name: "Smart Watch", price: 89.99, img: "https://picsum.photos/seed/smartwatch/300/200" },
  { id: 3, name: "Gaming Mouse", price: 29.99, img: "https://picsum.photos/seed/mouse/300/200" }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to cart</button>
  `;
  container.appendChild(card);
});