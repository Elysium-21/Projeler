document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Orijinal Renk
            const originalColor = button.style.backgroundColor;
            // Butonun Rengini Değiştir
            button.style.backgroundColor = '#28a745'; // Yeşil renge değiştir

            // Bir süre sonra orijinal renge geri döndür
            setTimeout(function() {
                button.style.backgroundColor = '#ff4d4d'; // Orijinal renk
            }, 2000); // 2000 milisaniye = 2 saniye
        });
    });
});