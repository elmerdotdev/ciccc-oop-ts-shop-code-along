import { Component } from './Component.js';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.props.cartContext.addItem(this.props.product);
  }

  render() {
    const { product } = this.props;

    // Create the product item element
    const productElement = document.createElement('div');
    productElement.className = `product-${product.id}`;
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button id="add-to-cart-btn-${product.id}">Add to Cart</button>
    `;

    // Add click event to the button
    productElement.querySelector(`#add-to-cart-btn-${product.id}`).addEventListener('click', this.handleAddToCart);

    return productElement;
  }
}