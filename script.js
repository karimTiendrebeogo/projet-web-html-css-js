// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.querySelector('ul').classList.toggle('show');
});

// Thème clair/sombre
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Validation formulaire
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(nom === '' || !emailRegex.test(email) || message.length < 10){
    formMessage.style.color = 'red';
    formMessage.textContent = 'Veuillez remplir correctement tous les champs.';
  } else {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Merci ! Votre message a été envoyé.';
    form.reset();
  }
});

// Bouton retour en haut
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// // // Menu mobile
// // const menuToggle = document.getElementById("menu-toggle");
// // const nav = document.getElementById("nav");

// // menuToggle.addEventListener("click", () => {
// //   nav.classList.toggle("show");
// // });

// // // Thème sombre / clair
// // const themeToggle = document.getElementById("theme-toggle");
// // const body = document.body;
// // const themeIcon = themeToggle.querySelector("i");

// // themeToggle.addEventListener("click", () => {
// //   body.classList.toggle("dark");
// //   if (body.classList.contains("dark")) {
// //     themeIcon.classList.replace("fa-moon", "fa-sun");
// //   } else {
// //     themeIcon.classList.replace("fa-sun", "fa-moon");
// //   }
// // });
