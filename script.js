let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

let navbar = document.querySelector(".navbar");

let menu = document.querySelector("#menu-icon");
const textoOriginal = "menu";
const textoAlternativo = "close";

function alternarTexto() {
  menu.textContent =
    menu.textContent === textoAlternativo ? textoOriginal : textoAlternativo;
}

menu.onclick = () => {
  navbar.classList.toggle("active");
  alternarTexto();
};

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(".home-text", { origin: "left" });
sr.reveal(".home-img", { origin: "right" });
