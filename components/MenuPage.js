export default class MenuPage extends HTMLElement {
  constructor() {
    super();
  }

  // when the component attaches to the dom
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define('menu-page', MenuPage);
