let cart = [];
let totalPrice = 0;

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total-price");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice;
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}
