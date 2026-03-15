const knopka = document.getElementById('my-btn');

knopka.onclick = function() {
    // 1. Каждый клик создаем НОВЫЙ объект звука
    // Это позволяет им играть одновременно
    const newAudio = new Audio('sound.mp3'); 
    
    // 2. Запускаем его
    newAudio.play();

    // 3. (Опционально) Чтобы не засорять память, 
    // удаляем объект после того, как звук закончится
    newAudio.onended = function() {
        this.remove(); 
    };

    console.log("Бах! Еще один звук наложился");
};
//12345