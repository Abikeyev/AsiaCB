class NavbarElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Resources</a>
        <a href="">Contacts</a>
      </nav>
    `
  }
}

customElements.define("nav-bar", NavbarElement)

const file = new File("templates/navbar.html")
console.log(file)
