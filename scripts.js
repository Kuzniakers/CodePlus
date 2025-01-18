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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Zapobiega odświeżeniu strony

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Dodaj komentarz do bazy danych
    firebase.database().ref('comments').push({
        username: username,
        comment: comment,
        timestamp: Date.now()
    });

    // Wyczyść formularz
    document.getElementById('comment-form').reset();
});

