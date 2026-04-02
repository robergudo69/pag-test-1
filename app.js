// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de Scroll en el Header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
            header.style.padding = '0.7rem 5%';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.padding = '1rem 5%';
        }
    });

    // 2. Animación de "Revelar al Hacer Scroll" (Scroll Reveal)
    // Esto hace que los elementos aparezcan suavemente cuando el usuario baja
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase que activa la animación CSS
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Seleccionamos todos los elementos con la clase fade-in y los observamos
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Mensaje de bienvenida profesional en consola
    console.log("%c🍴 Sabor & Arte - Web Cargada", "color: #c19a6b; font-size: 1.2rem; font-weight: bold;");
}); // Función para iluminar el cuadro correspondiente
const iluminarCuadro = (idDestino) => {
    // Buscamos el elemento dentro de la sección (el info-card o el menu-item)
    const seccion = document.querySelector(idDestino);
    const cuadro = seccion.querySelector('.info-card, .menu-item, .hero-content');

    if (cuadro) {
        // Quitamos la clase por si ya la tenía (para poder repetirla)
        cuadro.classList.remove('iluminar-seccion');
        
        // Forzamos un pequeño "refresco" para que el navegador note el cambio
        void cuadro.offsetWidth; 
        
        // Añadimos la clase para que inicie la animación de 1 segundo
        cuadro.classList.add('iluminar-seccion');
    }
};

// Escuchar clics en el menú
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        
        // Esperamos un poco a que el scroll termine antes de iluminar
        setTimeout(() => {
            iluminarCuadro(id);
        }, 600); // 600ms es el tiempo promedio del desplazamiento suave
    });
});console.log("%c🍴 Sabor & Arte - Web Successfully Loaded", "color: #c19a6b; font-size: 1.2rem; font-weight: bold;");