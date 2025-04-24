// Menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animación de las barras del menú
    const bars = document.querySelectorAll('.bar');
    if (navMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'rotate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0)';
    }
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'rotate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0)';
    });
});

// Animación de aparición al scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos a animar
const sections = document.querySelectorAll('section:not(.hero)');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Clase para animar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        // Por ahora, solo mostraremos un mensaje de éxito
        
        // Crear elemento de alerta
        const alertaExito = document.createElement('div');
        alertaExito.className = 'alerta-exito';
        alertaExito.innerHTML = `
            <p>¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.</p>
            <p>Te responderemos a la brevedad al correo ${email}.</p>
        `;
        alertaExito.style.backgroundColor = '#D24C49';
        alertaExito.style.color = 'white';
        alertaExito.style.padding = '1rem';
        alertaExito.style.borderRadius = '5px';
        alertaExito.style.marginTop = '1rem';
        
        // Insertar alerta después del formulario
        contactForm.after(alertaExito);
        
        // Resetear formulario
        contactForm.reset();
        
        // Eliminar alerta después de 5 segundos
        setTimeout(() => {
            alertaExito.style.opacity = '0';
            alertaExito.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                alertaExito.remove();
            }, 500);
        }, 5000);
    });
}

// Efecto parallax en el hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Animación de las tarjetas de sabores
const saborCards = document.querySelectorAll('.sabor-card');
saborCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    observer.observe(card);
});

// Animación de las tarjetas de testimonios
const testimonioCards = document.querySelectorAll('.testimonio-card');
testimonioCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    observer.observe(card);
});

// Añadir clase animate cuando los elementos son visibles
document.addEventListener('scroll', () => {
    document.querySelectorAll('.animate').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});