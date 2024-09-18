import { Component } from './Component.js';
import { ProductItem } from './ProductItem.js';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    // Fetch data from the JSON file
    fetch('http://localhost:3005/products')
      .then(response => response.json())
      .then(data => {
        this.state.products = data;
        this.render(); // Re-render with the fetched data
      })
      .catch(error => console.error('Error loading product data:', error));
  }

  render() {
    const productContainer = this.element || document.createElement('div');
    productContainer.innerHTML = '';

    // Iterate through the products and render ProductItem for each
    this.state.products.forEach((product) => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      });
      productContainer.appendChild(productItem.render());
    });

    return productContainer;
  }

  mount(container) {
    this.element = this.render(); // Render the initial empty container
    container.appendChild(this.element); // Append the element to the DOM
    this.componentDidMount(); // Manually call componentDidMount after mounting
  }
}