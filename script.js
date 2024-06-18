// Optional: Add JavaScript for interactivity or dynamic content loading
// Example: Toggle visibility of project details on click
document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show-details');
    });
});
