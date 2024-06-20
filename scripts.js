document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkmood');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Load saved theme preference
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme); // Save preference
    });
});