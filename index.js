// Import stylesheets
import './style.css';

class HolaMundo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<h1>Hola Mundo</h1>';
  }
}

window.customElements.define('hola-mundo', HolaMundo);
