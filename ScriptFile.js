const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


//toggle

// Get the toggle element
const toggle = document.querySelector('.toggle');
const body = document.body;

// Check if there's a saved mode in localStorage
const savedMode = localStorage.getItem('theme');
if (savedMode) {
    body.classList.add(savedMode);
}

// Add event listener for toggle
toggle.addEventListener('click', () => {
    // Toggle between light and dark mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save the mode
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Save the mode
    }
});