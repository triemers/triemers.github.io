class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer-container">
        <footer>
          <div class="footer-left">
            <a href="/" class="logo">🦖 TRUX</a>
            <div class="footer-email">// triemers12@gmail.com</div>
          </div>
          <nav class="footer-nav">
            <a href="/pages/about.html" class="footer-link">About</a>
            <a href="/files/ResumeLong.pdf" class="footer-link">Resume</a>
          </nav>
        </footer>
      </div>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
