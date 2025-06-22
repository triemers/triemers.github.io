//before/after image slider
const slider = document.querySelector('.slider-container');
const handle = document.querySelector('.slider-handle');
const beforeImage = document.querySelector('.before');

let isDragging = false;

handle.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = '';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    
    // Keep handle within slider bounds
    x = Math.max(0, Math.min(x, rect.width));
    
    const percent = (x / rect.width) * 100;
    
    handle.style.left = `${percent}%`;
    beforeImage.style.clipPath = `inset(0 0 0 ${percent}%)`;
});

// Touch events for mobile/tablet sliders
handle.addEventListener('touchstart', () => {
    isDragging = true;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const rect = slider.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = (x / rect.width) * 100;
    
    handle.style.left = `${percent}%`;
    beforeImage.style.clipPath = `inset(0 0 0 ${percent}%)`;
});




//IMAGE MODALS -- it works now 
 // Get all elements needed
var images = document.querySelectorAll('.myImg');
var modals = document.querySelectorAll('.myModal');
var closeButtons = document.querySelectorAll('.close');

// Add click event to each image
images.forEach(function(img, index) {
  img.onclick = function() {
    var modal = modals[index];
    var modalImg = modal.querySelector('.modal-content');
    var captionText = modal.querySelector('.modal-caption');
    
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Add click event to each close button
closeButtons.forEach(function(button) {
  button.onclick = function() {
    this.closest('.modal').style.display = 'none';
  }
});

// Close when clicking outside the image
modals.forEach(function(modal) {
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  }
});
