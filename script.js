// Menú móvil
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")

mobileMenu.addEventListener("click", function () {
  this.classList.toggle("active")
  navMenu.classList.toggle("active")

  // Animación de las barras del menú
  const bars = document.querySelectorAll(".bar")
  if (navMenu.classList.contains("active")) {
    bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)"
    bars[1].style.opacity = "0"
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)"
  } else {
    bars[0].style.transform = "rotate(0)"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "rotate(0)"
  }
})

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    mobileMenu.classList.remove("active")

    const bars = document.querySelectorAll(".bar")
    bars[0].style.transform = "rotate(0)"
    bars[1].style.opacity = "1"
    bars[2].style.transform = "rotate(0)"
  })
})

// Animación de aparición al scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Elementos a animar
const sections = document.querySelectorAll("section:not(.hero)")
sections.forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})

// Clase para animar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animate").forEach((el) => {
    el.style.opacity = "1"
    el.style.transform = "translateY(0)"
  })
})

// Formulario de contacto
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // El formulario se enviará a Formspree
    // No es necesario prevenir el comportamiento predeterminado
    // ya que queremos que el formulario se envíe
  })
}
