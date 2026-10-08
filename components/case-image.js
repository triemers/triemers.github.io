// Renders an .myImg + lightbox .myModal + .caption-below triplet from a
// single tag, replacing the ~6-line block that was previously hand-copied
// for every image on a case study page.
//
// Usage: <case-image src="..." alt="...">Caption shown below the image</case-image>
//
// Note: the modal's .modal-caption text is always overwritten with the
// image's alt text on click (see scripts.js), so there's no separate
// "modal caption" attribute here - the alt text IS the modal caption.
class CaseImage extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt') || '';
    const caption = this.textContent.trim();

    this.innerHTML = `
      <img class="myImg" src="${src}" alt="${alt}">
      <div class="myModal modal">
        <span class="close">&times;</span>
        <img class="modal-content" src="${src}" alt="${alt}">
        <div class="modal-caption">${alt}</div>
      </div>
      <p class="caption-below">${caption}</p>
    `;
  }
}

customElements.define('case-image', CaseImage);
