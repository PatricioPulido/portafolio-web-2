$(function () {
  // inicializa tooltips si los usas
  $('[data-toggle="tooltip"]').tooltip();

  // fuerza intervalo del carousel (ms). Quitar la línea si prefieres el valor por defecto del data-interval.
  $('#carouselExampleIndicators').carousel({ interval: 5000, pause: 'hover' });
});
//Animacion hero para que aparezca despues de cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('show'), 60);
});

//Animacion para que los elementos se revelen al hacer scroll en cards about-me
document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
});
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("active");
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".nombreAboutMe");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.4 // % del elemento visible
      }
    );

    elementos.forEach(el => observer.observe(el));
  });
  const card = document.querySelector('.contact-card');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) card.classList.add('visible');
});

observer.observe(card);

