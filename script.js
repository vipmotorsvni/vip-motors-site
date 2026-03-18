/* ================= script.js ================= */
// CARROSSEL PREMIUM
let i = 0;
const slides = document.querySelectorAll(".slide");

function trocarSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  i = (i + 1) % slides.length;
}
setInterval(trocarSlide, 2500);

// HEADER DINÂMICO
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ANIMAÇÃO AO ROLAR
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// WHATS PERSONALIZADO
function whatsapp() {
  const msg = "Olá! Vim pelo site da Vip Motors e quero atendimento.";
  window.open(`https://wa.me/5528999999999?text=${encodeURIComponent(msg)}`);
}

// ABRIR PÁGINAS
function abrirPagina(id) {
  document.querySelectorAll(".pagina").forEach(p => {
    p.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");

  // rolar até conteúdo
  window.scrollTo({
    top: document.getElementById("paginas").offsetTop - 80,
    behavior: "smooth"
  });
}
