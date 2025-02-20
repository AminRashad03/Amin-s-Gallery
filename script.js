document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            document.body.setAttribute('data-theme', theme);
        });
    });
});
