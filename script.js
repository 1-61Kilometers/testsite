document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('open');
            nav.classList.toggle('open');
        });
    }
    
    // Handle dropdown menu clicks on mobile
    const dropdownItems = document.querySelectorAll('nav ul li');
    
    dropdownItems.forEach(item => {
        if (item.querySelector('.dropdown-menu')) {
            item.addEventListener('click', function(e) {
                // Only toggle on mobile view
                if (window.innerWidth <= 768) {
                    // Don't propagate click if clicking a submenu item
                    if (e.target.closest('.dropdown-menu') && 
                        e.target.closest('li') !== this) {
                        return;
                    }
                    
                    e.preventDefault();
                    this.classList.toggle('open');
                }
            });
        }
    });
});