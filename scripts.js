document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

/*
document.addEventListener('DOMContentLoaded', () => {
    const clockContainer = document.createElement('div');
    clockContainer.id = 'clock';
    clockContainer.style.position = 'absolute';
    clockContainer.style.top = '10px';
    clockContainer.style.right = '10px';
    clockContainer.style.color = '#f4a261';
    clockContainer.style.fontFamily = 'Roboto Mono, monospace';
    clockContainer.style.fontSize = '1.2rem';
    document.body.appendChild(clockContainer);

    function updateClock() {
        const now = new Date();
        clockContainer.textContent = now.toLocaleTimeString('pl-PL');
    }

    setInterval(updateClock, 500);
    updateClock();
});
*/

