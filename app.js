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
// Base de datos de platillos
const dishData = {
    salad: {
        title: "Zen Garden Salad",
        price: "$15.00",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600",
        desc: "A refreshing blend of organic greens, avocado, and toasted nuts.",
        prep: "Hand-picked greens are washed in ice water, tossed with house-made citrus vinaigrette, and topped with sliced avocado and sunflower seeds."
    },
    pizza: {
        title: "Diavola Pizza",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
        desc: "Classic spicy Italian pizza with premium toppings.",
        prep: "48-hour fermented sourdough crust, topped with San Marzano tomatoes, spicy Calabrian salami, and fresh buffalo mozzarella. Baked at 450°C."
    },
    burger: {
        title: "Angus Prime Burger",
        price: "$19.00",
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=600",
        desc: "The ultimate meat lover's experience.",
        prep: "200g of dry-aged Angus beef grilled over charcoal, served on a toasted brioche bun with caramelized onions and aged cheddar cheese."
    }
};

const modal = document.getElementById("dishModal");

function openDish(dishKey) {
    const dish = dishData[dishKey];
    const body = document.getElementById("modalBody");

    body.innerHTML = `
        <img src="${dish.img}" class="modal-img">
        <h2>${dish.title} <span style="color:var(--primary)">${dish.price}</span></h2>
        <p style="margin: 15px 0; color: #ccc;">${dish.desc}</p>
        <div class="recipe-section">
            <h4 style="color:var(--primary)">Preparation:</h4>
            <p style="font-size: 0.9rem; line-height: 1.6;">${dish.prep}</p>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Cerrar si hacen clic fuera del cuadro
window.onclick = function(event) {
    if (event.target == modal) { closeModal(); }
}
const dishData = {
    salad: {
        title: "Zen Garden Salad",
        price: "$15.00",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
        prep: "Fresh greens are tossed with organic honey-mustard vinaigrette, topped with roasted sunflower seeds, feta cheese, and balsamic reduction."
    },
    pizza: {
        title: "Diavola Pizza",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
        prep: "Neapolitan style dough fermented for 48 hours, San Marzano tomatoes, spicy salami from Calabria, and fresh buffalo mozzarella baked at 450°C."
    },
    burger: {
        title: "Angus Prime Burger",
        price: "$19.00",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
        prep: "200g of dry-aged Angus beef, double cheddar cheese, caramelized onions with balsamic, and house-made truffle aioli on a toasted brioche bun."
    }
};

const modal = document.getElementById("dishModal");
const modalBody = document.getElementById("modalBody");

function openDish(key) {
    const dish = dishData[key];
    modalBody.innerHTML = `
        <img src="${dish.img}" style="width:100%; border-radius:10px; height:280px; object-fit:cover; margin-bottom:20px;">
        <h2 style="color:var(--primary); font-size:2rem;">${dish.title}</h2>
        <p style="font-size:1.3rem; margin:10px 0;">Price: ${dish.price}</p>
        <hr style="border:0; border-top:1px solid #333; margin:20px 0;">
        <h3 style="color:var(--primary); margin-bottom:10px;">Preparation Detail:</h3>
        <p style="line-height:1.6; color:#ccc;">${dish.prep}</p>
    `;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) closeModal();
}
const dishData = {
    salad: {
        title: "Zen Garden Salad",
        price: "$15.00",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
        prep: "Fresh greens are tossed with organic honey-mustard vinaigrette, topped with roasted sunflower seeds, feta cheese, and balsamic reduction."
    },
    pizza: {
        title: "Diavola Pizza",
        price: "$22.00",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
        prep: "Neapolitan style dough fermented for 48 hours, San Marzano tomatoes, spicy salami from Calabria, and fresh buffalo mozzarella baked at 450°C."
    },
    burger: {
        title: "Angus Prime Burger",
        price: "$19.00",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
        prep: "200g of dry-aged Angus beef, double cheddar cheese, caramelized onions with balsamic, and house-made truffle aioli on a toasted brioche bun."
    }
};

const modal = document.getElementById("dishModal");
const modalBody = document.getElementById("modalBody");

// ESTA FUNCIÓN ES LA QUE ABRE LA VENTANA
function openDish(key) {
    const dish = dishData[key];
    if (dish) {
        modalBody.innerHTML = `
            <img src="${dish.img}" style="width:100%; border-radius:10px; height:280px; object-fit:cover; margin-bottom:20px;">
            <h2 style="color:#c19a6b; font-size:2rem;">${dish.title}</h2>
            <p style="font-size:1.3rem; margin:10px 0;">Price: ${dish.price}</p>
            <hr style="border:0; border-top:1px solid #333; margin:20px 0;">
            <h3 style="color:#c19a6b; margin-bottom:10px;">Preparation Detail:</h3>
            <p style="line-height:1.6; color:#ccc;">${dish.prep}</p>
        `;
        modal.style.display = "block";
    }
}

function closeModal() {
    modal.style.display = "none";
}

// Cerrar al hacer clic fuera del cuadro
window.onclick = (event) => {
    if (event.target == modal) closeModal();
}