document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";

    const toggleSwitch = document.getElementById("toggle-switch");
    const themeStyle = document.getElementById("theme-style");

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-mode");
            themeStyle.href = "dark-mode.css";
            toggleSwitch.checked = true;
        } else {
            document.body.classList.remove("dark-mode");
            themeStyle.href = "light-mode.css";
            toggleSwitch.checked = false;
        }
    }

    applyTheme(savedTheme);

    toggleSwitch.addEventListener("change", function () {
        const newTheme = this.checked ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });
});
