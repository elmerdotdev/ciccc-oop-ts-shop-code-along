import { Component } from './Component.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Sidebar } from './Sidebar.js';
import { Product } from './Product.js';
import { ProductList } from './ProductList.js';

export class App extends Component {
  render() {
    // Define the overall structure of the app
    const appContainer = document.createElement('div');
    appContainer.innerHTML = `
      <div>
        <main id="main-content"></main>
        <div id="sidebar"></div>
      </div>
      <footer id="footer"></footer>
    `;

    // Append components to the predefined placeholders
    const header = new Header().render();
    const footer = new Footer({ footerText: '© 2024 My App!' }).render();
    const sidebar = new Sidebar({ cartContext: this.props.cartContext }).render();
    const product = new Product({ cartContext: this.props.cartContext }).render();

    // Insert the Header and Footer components
    appContainer.querySelector('main').appendChild(header); 
    appContainer.querySelector('main').appendChild(product); 
    appContainer.querySelector('#footer').appendChild(footer); 
    appContainer.querySelector('#sidebar').appendChild(sidebar);

    // Now explicitly mount the Product components to trigger their lifecycle and data fetching
    const productList = new ProductList({ cartContext: this.props.cartContext });

    productList.mount(appContainer.querySelector('main')); // Mount Product2 to main

    return appContainer; // Return the complete structure
  }
}