// 1. ЛОГИКА ДЛЯ ЗВУКА И ТЕКСТА КНОПКИ
const knopka = document.getElementById('my-btn');

if (knopka) {
    knopka.onclick = function() {
        const newAudio = new Audio('sound.mp3'); 
        newAudio.play();

        // СОХРАНЯЕМ ТЕКСТ, чтобы знать что возвращать
        const originalText = "Звук громкий не нажимать";

        // МЕНЯЕМ НА ПОЛСЕКУНДЫ
        knopka.innerText = "Я предупреждал";
        knopka.style.backgroundColor = "red";

        // ТАЙМЕР (500 мс = 0.5 сек)
        setTimeout(function() {
            knopka.innerText = originalText;
            knopka.style.backgroundColor = "orange"; 
        }, 1000); 

        newAudio.onended = function() {
            this.remove(); 
        };

        console.log("Бах! Текст изменился и звук наложился");
    }; 
}

// 2. ЛОГИКА ДЛЯ ФИЛЬТРА КАТЕГОРИЙ (оставляем как есть, она верная)
function filter(category) {
    const items = document.querySelectorAll('.news-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'flex'; 
        } else {
            item.style.display = 'none'; 
        }
    });
}
