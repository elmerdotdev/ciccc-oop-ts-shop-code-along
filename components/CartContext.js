export class CartContext {
  constructor() {
    this.cart = [];
    this.listeners = [];
  }

  addItem(item) {
    this.cart.push(item);
    this.notify(); // Notify all subscribed components of the change
  }

  getCart() {
    return this.cart;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.cart)); // Call all listeners with the updated cart
  }
}