//---HOME---
let username = "";

// Loop — user TIDAK akan masuk sebelum isi nama
while (!username || username.trim() === "") {
    username = prompt("Masukkan nama Anda untuk masuk:");
}

// Jika sudah mengisi nama, arahkan ke HOME
window.location.hash = "#home";

const homeSection = document.getElementById("home");
if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
}

//---NAVBAR---
document.getElementById("userName").textContent = username;

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.textContent.toLowerCase().replace(" ", "-");

        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});


//---MESSAGE US---
document.getElementById("msgForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("outName").textContent = document.getElementById("name").value;
    document.getElementById("outEmail").textContent = document.getElementById("email").value;
    document.getElementById("outPhone").textContent = document.getElementById("phone").value;
    document.getElementById("outMessage").textContent = document.getElementById("messageInput").value;

    this.reset(); 
});
