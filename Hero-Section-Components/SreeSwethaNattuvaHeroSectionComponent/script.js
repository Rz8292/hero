document.getElementById('hamburger').addEventListener('click', function() {
    var navItems = document.getElementById('nav-items');
    if (navItems.classList.contains('show')) {
        navItems.classList.remove('show');
    } else {
        navItems.classList.add('show');
    }
});
