// Smooth scrolling, active menu highlighting, and back to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');
    const backToTopArrows = document.querySelectorAll('.back-to-top');
    
    // Function to update active menu item
    function updateActiveMenu() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Function to show/hide back to top arrows based on scroll position
    function updateBackToTopVisibility() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const backToTop = section.querySelector('.back-to-top');
            
            if (backToTop) {
                // Show arrow when user has scrolled 30% into the section
                if (window.scrollY > (sectionTop + sectionHeight * 0.3)) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            }
        });
    }
    
    // Update active menu and back to top visibility on scroll
    window.addEventListener('scroll', function() {
        updateActiveMenu();
        updateBackToTopVisibility();
    });
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Smooth scrolling for back to top arrows
    backToTopArrows.forEach(arrow => {
        const link = arrow.querySelector('a');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize on page load
    updateActiveMenu();
    updateBackToTopVisibility();
});
