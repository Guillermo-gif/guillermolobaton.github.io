// Copy phone number functionality
document.querySelectorAll('.copy-phone, .copy-phone-btn').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        
        const phoneNumber = '+34640385744';
        
        // Copiar al portapapeles
        navigator.clipboard.writeText(phoneNumber).then(() => {
            // Mostrar feedback visual
            const originalText = this.textContent;
            const originalHTML = this.innerHTML;
            
            if (this.classList.contains('copy-phone')) {
                // Para el párrafo en info
                this.style.color = 'var(--accent-green)';
                this.textContent = '✓ Copiado!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 1500);
            } else if (this.classList.contains('copy-phone-btn')) {
                // Para el botón
                this.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
                this.style.color = 'var(--accent-green)';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = '';
                }, 1500);
            }
        }).catch(err => {
            console.error('Error copiando:', err);
            alert('No se pudo copiar el teléfono');
        });
    });
});

// Initialize EmailJS (si tienes cuenta, reemplaza la key)
try {
    if (window.emailjs) {
        emailjs.init('BN-gZJzSMJqLxvEQS');
    }
} catch (e) {
    console.log('EmailJS no disponible');
}

// Mobile Menu Toggle
document.querySelectorAll('.hamburger').forEach(hamburger => {
    hamburger.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll behavior for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Prevent default form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        const submitButton = this.querySelector('button[type="submit"]');
        const formStatus = document.getElementById('form-status');
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Abriendo Gmail...';
        formStatus.innerHTML = '';
        
        // Crear el mensaje preformateado
        const subject = `Mensaje desde Portfolio - ${name}`;
        const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
        
        // Abrir Gmail directamente
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=guillermolobaton1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
        
        // Mostrar mensaje de éxito
        formStatus.innerHTML = '<p class="success-message"><i class="fas fa-check-circle"></i> Se abrirá Gmail. Completa y envía el mensaje.</p>';
        
        // Limpiar formulario
        this.reset();
        
        // Resetear botón después de 3 segundos
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensaje';
        }, 3000);
    });
}

// Scroll reveal animation for cards and elements
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.experience-card, .skill-card, .education-item, .info-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        
        if (elementTop < viewportHeight && elementBottom > 0) {
            element.style.animation = 'slideIn 0.6s ease-out forwards';
        }
    });
};

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);

// Initial check
revealOnScroll();

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 102, 204, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.1)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section[id]');
    let navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(current => {
        let sectionTop = current.offsetTop;
        let sectionHeight = current.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`.nav-link[href="#${current.getAttribute('id')}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.style.color = 'var(--secondary-color)';
            }
        }
    });
});

// Counter animation for statistics
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 50);
};

// Google Analytics compatibility (optional)
// You can add your own tracking here

// Console message for fun
console.log('%c¡Hola! 👋', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBienvenido al portfolio de Guillermo Algobia Lobaton', 'color: #00ff88; font-size: 14px;');
console.log('%cTécnico en Sistemas | Desarrollador en Formación', 'color: #0066cc; font-size: 12px;');

console.log('%c🔒 Especializado en Ciberseguridad e Infraestructura IT', 'color: #00d4ff; font-weight: bold; font-size: 11px; margin-top: 10px;');
