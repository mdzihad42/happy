document.addEventListener('DOMContentLoaded', () => {
    const balloonsContainer = document.querySelector('.balloons-container');
    const confettiContainer = document.querySelector('.confetti-container');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloonsContainer.appendChild(balloon);

        balloon.addEventListener('animationend', () => balloon.remove());
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => confetti.remove());
    }

    setInterval(createBalloon, 30000);  // Create one balloon every 3 seconds
setInterval(createConfetti, 5000);  // Create one confetti every 500ms

});
