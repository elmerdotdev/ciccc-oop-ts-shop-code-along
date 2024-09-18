import { Component } from './Component.js';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const item = { name: 'Product 1', price: 20 };
    this.props.cartContext.addItem(item);
  }

  render() {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <div>
        <h2>Product 1</h2>
        <p>Price: $20</p>
        <button id="add-to-cart-btn">Add to Cart</button>
      </div>
    `;

    productElement.querySelector('#add-to-cart-btn').addEventListener('click', this.handleAddToCart);

    return productElement;
  }
}