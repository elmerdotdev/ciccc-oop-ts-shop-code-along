// components/Footer.js
import { Component } from './Component.js';

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer');
    
    // Use the footerText prop passed from the parent component (App)
    const footerText = this.props.footerText || 'Default Footer Text'; // Fallback if no footerText prop is provided

    footer.innerHTML = `
      <p>${footerText}</p>
    `;
    return footer;
  }
}