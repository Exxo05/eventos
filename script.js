document.addEventListener('DOMContentLoaded', () => {
    const botonAlerta = document.getElementById('botonAlerta');
    const cambiarColorFondo = document.getElementById('cambiarColorFondo');
    const texto = document.getElementById('texto');

    botonAlerta.addEventListener('click', () => {
        const inputText = texto.value;
        alert(`Has escrito: ${inputText}`);
    });
    // Esta parte de cambiar el dolor de fondo la saque de otro proyecto
    cambiarColorFondo.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});