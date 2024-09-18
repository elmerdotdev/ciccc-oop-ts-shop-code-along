import { App } from './components/App.js';
import { CartContext } from './components/CartContext.js';

// Get the root container in the HTML
const root = document.getElementById('app');

// Create an instance of the App component with context
const cartContext = new CartContext();
const app = new App({ cartContext });

// Render the App component into the root container
app.mount(root); // Call mount method to append the app's output to the DOM