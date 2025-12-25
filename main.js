document.getElementById("applyForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const note = document.getElementById("note").value;

    const whatsappNumber = "905305162948";

    const message = `Merhaba, Turkcell hat başvurusu yapmak istiyorum.%0AAd Soyad: ${name}%0ATelefon: ${phone}%0AHat Türü: ${type}%0ANot: ${note}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
});
