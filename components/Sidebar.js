import { Component } from './Component.js';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.ulElement = null; // Reference to the <ul> element
  }

  updateCart(cart) {
    this.state.cart = cart;

    // Clear existing list items
    this.ulElement.innerHTML = '';

    // Add updated cart items
    const cartItems = this.state.cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
    this.ulElement.innerHTML = cartItems;
  }

  render() {
    // Create the sidebar container
    const sidebarElement = document.createElement('div');
    sidebarElement.innerHTML = `
      <div>
        <h2>Cart</h2>
        <ul></ul>
      </div>
    `;

    // Store reference to the <ul> element for future updates
    this.ulElement = sidebarElement.querySelector('ul');

    // Return the sidebar element for mounting
    return sidebarElement;
  }
}