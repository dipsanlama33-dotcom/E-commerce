const products = [
 { id: 1, name: "Wireless Headphones", price: 49.99, img: "https://via.placeholder.com/150" }, { id: 2, name: "Smart Watch", price: 89.99, img: "https://via.placeholder.com/150" },
 { id: 3, name: "Gaming Mouse", price: 29.99, img: "https://via.placeholder.com/150" }
];
const container = document.getElementById("product-container");
products.forEach(product => {
 const card = document.createElement("div");
 card.className = "product-card";
 card.innerHTML = `
 <img src="${product.img}" alt="${product.name}">
 <h3>${product.name}</h3>
 <p>$${product.price}</p>
 <button onclick="addToCart(${product.id})">Add to Cart</button>
 `;
 container.appendChild(card);
});
