export class Component {
  constructor(props = {}) {
    this.props = props; // Store the props passed to the component
    this.element = null;
  }

  // Placeholder method for rendering the component - to be implemented by subclasses
  render() {
    throw new Error("Components must implement a render() method.");
  }

  // Mount the component to a container in the DOM
  mount(container) {
    this.element = this.render(); // Call the component's render method to get the element
    container.appendChild(this.element); // Append the element to the container
  }
}