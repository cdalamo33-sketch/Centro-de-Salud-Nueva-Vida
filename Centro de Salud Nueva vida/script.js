document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    const mensajeExito = document.getElementById('mensajeExito');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value;

        if (nombre && apellido && sexo) {
            mensajeExito.textContent = `¡Registro con éxito! Bienvenido/a, ${nombre} ${apellido}.`;
            mensajeExito.classList.remove('hidden');
            form.reset(); // Limpia los campos del formulario
        }
    });
});