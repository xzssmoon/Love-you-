// ============================================
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ============================================
function nextPage(pageNum) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));

    const target = document.getElementById('page' + pageNum);
    if (target) {
        target.classList.add('active');
        createHeartBurst(8);
    }
}

// ============================================
// ЛЕТАЮЩИЕ ЛЕПЕСТКИ
// ============================================
function createPetal() {
    const petals = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const emojis = ['🌹', '🌸', '🌷', '🌺', '💕', '💖', '❤️', '🌹'];
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
    petal.style.animationDuration = (Math.random() * 8 + 8) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';

    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 18000);
}

setInterval(createPetal, 900);
for (let i = 0; i < 5; i++) {
    setTimeout(createPetal, i * 200);
}

// ============================================
// САЛЮТ ИЗ СЕРДЕЧЕК
// ============================================
function createHeartBurst(count = 15) {
    const hearts = ['💖', '💕', '❤️', '💗', '💓', '🌹', '🌹'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (Math.random() * 20 + 25) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1.5s cubic-bezier(0.2, 0.8, 0.3, 1)';

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 280 + 120;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        requestAnimationFrame(() => {
            heart.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg) scale(0)`;
            heart.style.opacity = '0';
        });

        setTimeout(() => heart.remove(), 1500);
    }
}
