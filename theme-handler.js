
// Get the saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

// Get toggle-switch and theme-style elements
const toggleSwitch = document.getElementById('toggle-switch');
const themeStyle = document.getElementById('theme-style');

// Apply the saved theme or default to 'light' if not set
if (savedTheme === 'dark') {
    toggleSwitch.checked = true;
    themeStyle.href = 'dark-mode.css';
} else {
    toggleSwitch.checked = false;
    themeStyle.href = 'light-mode.css';
}

// Add event listener for toggle-switch
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        themeStyle.href = 'dark-mode.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeStyle.href = 'light-mode.css';
        localStorage.setItem('theme', 'light');
    }
});
