document.getElementById("applyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const note = document.getElementById("note").value;

    const whatsappNumber = "905451349642"; // BURAYA KENDİ NUMARANI YAZ

    const message =
        "Merhaba, Turkcell hat başvurusu yapmak istiyorum.%0A%0A" +
        "Ad Soyad: " + name + "%0A" +
        "Telefon: " + phone + "%0A" +
        "Hat Türü: " + type + "%0A" +
        "Not: " + note;

    const url = "https://wa.me/" + whatsappNumber + "?text=" + message;
    window.open(url, "_blank");
});
