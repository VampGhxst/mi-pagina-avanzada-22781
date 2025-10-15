document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad para Cambiar Tema ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        // Alterna la clase 'dark-mode' en el elemento body
        body.classList.toggle('dark-mode');
    });

    // --- Funcionalidad del Formulario ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        // Previene que la página se recargue al enviar el formulario
        event.preventDefault(); 
        
        const nombre = event.target.nombre.value;
        const correo = event.target.correo.value;
        
        // Muestra un mensaje de confirmación
        alert(`¡Gracias por contactarnos, ${nombre}! Te responderemos pronto.`);
        
        // Limpia los campos del formulario
        contactForm.reset();
    });

});