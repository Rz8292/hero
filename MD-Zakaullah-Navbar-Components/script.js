// script.js

const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');
const body = document.body;

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
