export default class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' }); // creating shadow dom
  }

  // when the component attaches to the dom
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('menu-page', MenuPage);
