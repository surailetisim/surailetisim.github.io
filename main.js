document.getElementById("applyForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Form verilerini al
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const note = document.getElementById("note").value;

    // WhatsApp numarası
    const whatsappNumber = "905451349642"; 

    // Mesaj oluştur
    const message = `Merhaba, Turkcell hat başvurusu yapmak istiyorum.%0AAd Soyad: ${name}%0ATelefon: ${phone}%0AHat Türü: ${type}%0ANot: ${note}`;

    // WhatsApp linkini oluştur
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Yeni sekmede aç
    window.open(whatsappURL, "_blank");
});
