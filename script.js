async function getText(dir) {
  const headers = {
    headers: {
      'method': 'get',
      'Content-Type': 'text/plain',
      'Accept': 'text/plain'
    }
  }
  const response = await fetch(dir, headers)
  const ret = await response.text()
  return ret
}
const navbarText = getText("templates/navbar.html")
class NavbarElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // this.innerHTML = `
    //   <nav id="navbar">
    //     <img src="" alt="logo"/>
    //     <a href="">О компании</a>
    //     <a href="">Услуги</a>
    //     <a href="">Сертификаты</a>
    //     <a href="">Наши Ресурсы</a>
    //     <a href="">Наши Обьекты</a>
    //     <a href="">Контакты</a>
    //     
    //   </nav>
    // `
    this.innerHTML = navbarText
    this.style = `
      display: block;
    `
  }
}

customElements.define("nav-bar", NavbarElement)

// const file = new File("templates/navbar.html")
// console.log(file)
