class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header-container">
        <header>
          <a href="/" class="logo">TR</a>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav class="nav-menu">
            <a href="/pages/about.html" class="nav-link">About</a>
            <a href="/files/ResumeLong.pdf" class="nav-link" target="_blank">Resume</a>
          </nav>
        </header>
      </div>
    `;

    const hamburger = this.querySelector('.hamburger');
    const navMenu = this.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    this.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

customElements.define('site-header', SiteHeader);
