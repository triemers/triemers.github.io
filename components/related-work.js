// Renders the "More Work" horizontal card list on each case study page,
// reading from the shared case-studies-data.js list and excluding whichever
// case study the current page already is. Add a case study to that one
// file and every page's "More Work" section picks it up automatically.
class RelatedWork extends HTMLElement {
  connectedCallback() {
    const excludeId = this.getAttribute('exclude');
    const items = caseStudies.filter(cs => cs.id !== excludeId);

    this.innerHTML = items.map(cs => {
      const targetAttr = cs.target ? ` target="${cs.target}"` : '';
      return `
        <div class="case-card horizontal-card">
          <a href="${cs.href}"${targetAttr}>
            <img src="${cs.thumb}" class="card-img-small" alt="">
            <div class="case-description-wrapper">
              <div class="home-case-title">
                <h2>${cs.title}</h2>
                <div class="arrow">→</div>
              </div>
              <p class="case-desc">${cs.desc}</p>
            </div>
          </a>
        </div>
      `;
    }).join('');
  }
}

customElements.define('related-work', RelatedWork);
