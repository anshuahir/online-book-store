// Simple cart using localStorage
const CART_KEY = 'bookstore_cart_v1';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function addToCart(item) {
  const cart = getCart();
  const idx = cart.findIndex(
    (x) => x.name === item.name && x.dept === item.dept
  );
  if (idx >= 0) {
    cart[idx].qty += item.qty || 1;
  } else {
    cart.push({ ...item, qty: item.qty || 1 });
  }
  saveCart(cart);
  alert(`${item.name} added to cart`);
}

function clearCart() {
  saveCart([]);
}

function formatCurrency(n) {
  return `$${Number(n).toFixed(1)}`;
}

// Expose to pages
window.CartStore = { getCart, saveCart, addToCart, clearCart, formatCurrency };