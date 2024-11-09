// Функція для показу деталей номеру з більшою інформацією
function showDetails(roomId) {
    const roomTitle = document.querySelector(`#${roomId} h3`).textContent;
    const roomDescription = {
        room1: "Люкс: Просторий номер з видом на море, обладнаний сучасною технікою та комфортними меблями.",
        room2: "Стандарт: Затишний номер для двох, з усіма необхідними зручностями для приємного відпочинку."
    };

    // Створення спливаючого вікна
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '2rem';
    modal.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '1000';

    modal.innerHTML = `
        <h3>${roomTitle}</h3>
        <p>${roomDescription[roomId]}</p>
        <button onclick="closeModal()">Закрити</button>
    `;

    document.body.appendChild(modal);
}

// Функція для закриття модального вікна
function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Підсвічування активного пункту меню при прокручуванні
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
