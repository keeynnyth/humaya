document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Mostrar el mensaje de éxito
    document.getElementById('mensaje-exito').style.display = 'block';

    // Limpiar el formulario (opcional)
    document.getElementById('miFormulario').reset();
});
