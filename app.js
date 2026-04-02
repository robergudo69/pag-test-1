// 1. Configuración de Estilos (CSS in JS)
const style = document.createElement('style');
style.textContent = `
    body { 
        background: #0f172a; 
        color: white; 
        font-family: 'Segoe UI', Tahoma, sans-serif; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
        margin: 0; 
    }
    .card {
        background: #1e293b;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        text-align: center;
        border: 1px solid #334155;
        max-width: 400px;
    }
    .btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: bold;
        transition: background 0.3s;
    }
    .btn:hover { background: #2563eb; }
    .counter { font-size: 3rem; margin: 1rem 0; color: #60a5fa; }
`;
document.head.appendChild(style);

// 2. Creación de Elementos
const root = document.getElementById('root');

const card = document.createElement('div');
card.className = 'card';

const title = document.createElement('h1');
title.innerText = 'JS Dinámico';

const desc = document.createElement('p');
desc.innerText = 'Esta página fue generada 100% con código JavaScript.';

const counterDisplay = document.createElement('div');
counterDisplay.className = 'counter';
counterDisplay.innerText = '0';

const button = document.createElement('button');
button.className = 'btn';
button.innerText = 'Incrementar Potencial';

// 3. Lógica e Interactividad
let count = 0;
button.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
    // Efecto visual dinámico
    card.style.borderColor = count % 2 === 0 ? '#3b82f6' : '#10b981';
});

// 4. Inyección al DOM
card.appendChild(title);
card.appendChild(desc);
card.appendChild(counterDisplay);
card.appendChild(button);
root.appendChild(card);

console.log("¡Web generada exitosamente!");