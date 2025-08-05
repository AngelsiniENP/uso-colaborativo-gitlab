document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos referencias a los elementos del formulario
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Referencias para la funcionalidad de mostrar/ocultar contraseña
    const togglePassword = document.getElementById('togglePassword');
    const eyeIconOpen = document.getElementById('eyeIconOpen'); // Path for the open eye icon
    const eyeIconClosed = document.getElementById('eyeIconClosed'); // Path for the closed eye icon

    // Inicialmente, el ícono de ojo abierto debe estar visible y el cerrado oculto
    eyeIconOpen.style.display = 'none'; // Oculta la parte del "ojo abierto" por defecto
    eyeIconClosed.style.display = 'block'; // Muestra la parte del "ojo cerrado" por defecto


    // Añadimos un 'event listener' al botón de alternar contraseña
    togglePassword.addEventListener('click', () => {
        // Obtenemos el tipo actual del input de contraseña
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        // Cambiamos el tipo del input
        passwordInput.setAttribute('type', type);

        // Cambiamos la visibilidad de los íconos del ojo
        if (type === 'password') {
            eyeIconOpen.style.display = 'none'; // Oculta el ojo abierto
            eyeIconClosed.style.display = 'block'; // Muestra el ojo cerrado
        } else {
            eyeIconOpen.style.display = 'block'; // Muestra el ojo abierto
            eyeIconClosed.style.display = 'none'; // Oculta el ojo cerrado
        }
    });

    // Añadimos un 'event listener' al evento 'submit' del formulario
    loginForm.addEventListener('submit', (event) => {
        // Prevenimos el comportamiento por defecto del envío del formulario
        // Esto evita que la página se recargue y nos permite manejar la validación
        event.preventDefault();

        // Reiniciamos los mensajes de error
        usernameError.classList.add('hidden');
        passwordError.classList.add('hidden');

        let isValid = true; // Bandera para controlar si el formulario es válido

        // Validamos el campo de usuario/correo electrónico
        if (usernameInput.value.trim() === '') {
            usernameError.classList.remove('hidden'); // Mostramos el mensaje de error
            isValid = false; // Marcamos el formulario como inválido
        }

        // Validamos el campo de contraseña
        if (passwordInput.value.trim() === '') {
            passwordError.classList.remove('hidden'); // Mostramos el mensaje de error
            isValid = false; // Marcamos el formulario como inválido
        }
    });
});
