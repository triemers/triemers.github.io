class CaseCard extends HTMLElement {
  connectedCallback() {
    const number = this.getAttribute('number');
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const mediaType = this.getAttribute('media-type');
    const src = this.getAttribute('src');
    const poster = this.getAttribute('poster');

    const targetAttr = target ? ` target="${target}"` : '';

    const mediaHTML = mediaType === 'video'
      ? `<video class="card-img" autoplay muted loop preload="metadata" poster="${poster}"><source src="${src}" type="video/mp4"></video>`
      : `<img src="${src}" alt="" class="card-img">`;

    this.innerHTML = `
      <span class="case-number">${number}</span>
      <a href="${href}" class="case-link"${targetAttr}>
        ${mediaHTML}
        <div class="case-info">
          <h2>${title} <span class="arrow">→</span></h2>
          <p class="case-desc">${description}</p>
        </div>
      </a>
    `;
  }
}

customElements.define('case-card', CaseCard);
