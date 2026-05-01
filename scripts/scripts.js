
//home name/role animation - I don't love this but leaving it in because it was tough

//document.addEventListener('DOMContentLoaded', () => {
    // Find all bold elements you want to animate
    //const boldElements = document.querySelectorAll('.home-title strong');
    
    //boldElements.forEach((element, index) => {
        // Get the text content
        //const text = element.textContent;
        
        //data attribute, class
        //element.setAttribute('data-text', text);
        //element.classList.add('text-reveal');
        
        //stagger delay based on index
        //element.style.setProperty('--stagger-delay', `${index * .8}s`);
    //});
//});

console.log('Script loaded! Number of images:', document.querySelectorAll('.myImg').length);

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


//before/after image slider
document.querySelectorAll('.slider-container').forEach((slider) => {
    const handle = slider.querySelector('.slider-handle');
    const beforeImg = slider.querySelector('.before');
    let isDragging = false;

    // Mouse events
    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width)); // Keep within bounds
        
        const percent = (x / rect.width) * 100;
        
        handle.style.left = `${percent}%`;
        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`; // Clip from right
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = '';
    });

    // Touch events
    handle.addEventListener('touchstart', () => {
        isDragging = true;
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        const rect = slider.getBoundingClientRect();
        let x = touch.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        
        const percent = (x / rect.width) * 100;
        
        handle.style.left = `${percent}%`;
        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`; // Clip from right
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
});

//Paragraph load in - need to bring in piece by piece, iterate based on child elements? 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements that should animate
document.querySelectorAll('.case-body, .myImg, .card-img, .slider-container').forEach(el => {
    observer.observe(el);
});

// Back to top — case study pages only
if (document.querySelector('.case-study-wrapper')) {
    var backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = 'Back to top ↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function checkBackToTop() {
        var scrolled = Math.max(
            window.scrollY || 0,
            document.documentElement.scrollTop || 0,
            document.body.scrollTop || 0
        );
        backToTop.classList.toggle('visible', scrolled > window.innerHeight * 2.5);
    }

    [window, document, document.documentElement, document.body].forEach(function (el) {
        el.addEventListener('scroll', checkBackToTop, { passive: true });
    });
}
