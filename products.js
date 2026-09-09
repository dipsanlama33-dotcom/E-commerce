const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, img: "https://m.media-amazon.com/images/I/81NfyaGuSVL.jpg" },
  { id: 2, name: "Smart Watch", price: 89.99, img: "https://www.skg.com/cdn/shop/products/skg-v7-pro-smart-watch-with-alexa-built-in-bluetooth-callanswermake-call-604781.jpg?v=1677051256" },
  { id: 3, name: "Gaming Mouse", price: 29.99, img: "https://m.media-amazon.com/images/I/71QR4yJdKaL.jpg"}
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