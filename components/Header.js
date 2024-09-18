// components/Header.js
import { Component } from './Component.js';

export class Header extends Component {
  render() {
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>Welcome to My Static App</h1>
    `;
    return header;
  }
}