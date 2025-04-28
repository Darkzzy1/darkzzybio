// Анимация с помощью GSAP
gsap.from("h1", { duration: 2, opacity: 0, y: -50 });
gsap.from(".triangle", { duration: 2, opacity: 0, stagger: 0.3, scale: 0.5 });

// Кнопка для отправки сообщения в Telegram
document.getElementById("telegramBtn").addEventListener("click", function() {
    const token = 'ВАШ_ТОКЕН_БОТА';
    const chatId = 'ВАШ_CHAT_ID'; // Получить из @userinfobot в Telegram
    const message = 'Привет! Это тестовое сообщение от моего сайта.';
    
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`)
        .then(response => response.json())
        .then(data => alert('Сообщение отправлено в Telegram!'))
        .catch(error => console.error('Ошибка:', error));
});
