// Esperamos a que el documento HTML cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. VALIDACIÓN: DASHBOARD (Jefe de Mantenimiento)
    // ==========================================
    const formAsignacion = document.getElementById('form-asignacion');
    
    // Verificamos si estamos en la página del Dashboard
    if (formAsignacion) {
        formAsignacion.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Evita recargar la página

            // Capturamos los campos
            const solicitud = document.getElementById('solicitud');
            const tecnico = document.getElementById('tecnico');
            
            // Capturamos los párrafos donde mostraremos los errores
            const errorSolicitud = document.getElementById('error-solicitud');
            const errorTecnico = document.getElementById('error-tecnico');
            const mensajeExito = document.getElementById('mensaje-exito');

            // Limpiamos errores previos en cada intento
            errorSolicitud.textContent = '';
            errorTecnico.textContent = '';
            mensajeExito.style.display = 'none';

            let esValido = true;

            // Validaciones
            if (solicitud.value === '') {
                errorSolicitud.textContent = 'Debe seleccionar una solicitud del catálogo de activos.';
                esValido = false;
            }
            if (tecnico.value === '') {
                errorTecnico.textContent = 'Debe asignar esta tarea a un técnico disponible.';
                esValido = false;
            }

            // Simulación de envío exitoso
            if (esValido) {
                mensajeExito.style.display = 'block';
                formAsignacion.reset(); // Limpia el formulario
                // Ocultar mensaje después de 3 segundos
                setTimeout(() => mensajeExito.style.display = 'none', 3000);
            }
        });
    }

    // ==========================================
    // 2. VALIDACIÓN: ARRENDATARIO (Reporte de Falla)
    // ==========================================
    const formArrendatario = document.getElementById('form-arrendatario');
    
    // Verificamos si estamos en la página del Arrendatario
    if (formArrendatario) {
        formArrendatario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            const ubicacion = document.getElementById('ubicacion');
            const descripcion = document.getElementById('descripcion');
            
            // Seleccionamos el párrafo que está inmediatamente después del input
            const errorUbicacion = ubicacion.nextElementSibling; 
            const errorDescripcion = descripcion.nextElementSibling;
            
            // Seleccionamos el mensaje de éxito usando su clase
            const mensajeExito = formArrendatario.querySelector('.mensaje-exito');

            // Limpiamos errores previos
            errorUbicacion.textContent = '';
            errorDescripcion.textContent = '';
            mensajeExito.style.display = 'none';

            let esValido = true;

            if (ubicacion.value.trim() === '') {
                errorUbicacion.textContent = 'Por favor, indique la ubicación o el equipo afectado.';
                esValido = false;
            }
            if (descripcion.value.trim() === '') {
                errorDescripcion.textContent = 'Debe describir detalladamente la falla para enviar el reporte.';
                esValido = false;
            }

            // Simulación de envío exitoso
            if (esValido) {
                mensajeExito.style.display = 'block';
                formArrendatario.reset();
                setTimeout(() => mensajeExito.style.display = 'none', 3000);
            }
        });
    }

    // ==========================================
    // 3. VALIDACIÓN: TÉCNICO DE MANTENIMIENTO
    // ==========================================
    const formTecnico = document.getElementById('form-tecnico');
    
    // Verificamos si estamos en la página del Técnico
    if (formTecnico) {
        formTecnico.addEventListener('submit', function(evento) {
            evento.preventDefault();
            
            const codigo = document.getElementById('codigo-ot');
            const estado = document.getElementById('estado-trabajo');
            const comentarios = document.getElementById('comentarios-tecnico');
            
            const errorCodigo = codigo.nextElementSibling;
            const errorEstado = estado.nextElementSibling;
            const errorComentarios = comentarios.nextElementSibling;

            // Limpiamos errores previos
            errorCodigo.textContent = '';
            errorEstado.textContent = '';
            errorComentarios.textContent = '';

            let esValido = true;

            if (codigo.value.trim() === '') {
                errorCodigo.textContent = 'Debe ingresar el código de la Orden (Ej: OT-104).';
                esValido = false;
            }
            if (estado.value === '') {
                errorEstado.textContent = 'Por favor, seleccione el estado final de la reparación.';
                esValido = false;
            }
            if (comentarios.value.trim() === '') {
                errorComentarios.textContent = 'Debe agregar comentarios o novedades sobre el trabajo realizado.';
                esValido = false;
            }

            // Simulación de envío exitoso usando un Alert (ya que están en terreno)
            if (esValido) {
                alert('¡Reporte digital enviado con éxito! La orden de trabajo ha sido actualizada.');
                formTecnico.reset();
            }
        });
    }
});