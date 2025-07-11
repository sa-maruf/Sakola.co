// Get references to the mobile menu button and the menu itself
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

// Add a click event listener to the button
mobileMenuButton.addEventListener('click', () => {
    // Toggle the 'active' class on the mobile menu to show/hide it
    mobileMenu.classList.toggle('active');
    // Toggle the icons
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});