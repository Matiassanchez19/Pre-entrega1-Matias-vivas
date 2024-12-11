console.log

function calcularPrecio() {
    // Definir los precios de las entradas
    const precios = {
        general: { sabado: 5, domingo: 7 },
        platea: { sabado: 12, domingo: 15 },
        vip: { sabado: 23, domingo: 25 },
        boxes: { sabado: 50, domingo: 60 }
    };

    // Definir los precios de estacionamiento
    const estacionamiento = { sabado: 10, domingo: 12 };

    let continuar = true; // Variable de control para el ciclo

    while (continuar) {
        // Solicitar la ubicación
        const ubicacion = prompt("Selecciona una ubicación (general, platea, vip, boxes):");
        

        // Validar la ubicación
        if (!precios[ubicacion]) {
            alert("Ubicación no válida. Por favor, selecciona entre general, platea, vip o boxes.");
            continue; // Reiniciar el ciclo si la ubicación no es válida
        } 

        // Solicitar el día
        const dia = prompt("Selecciona el día (sabado, domingo o sabado y domingo):").toLowerCase();

        // Inicializar el precio total
        let precioTotal = 0;

        // Calcular el precio de la entrada según el día
        if (dia === "sabado") {
            precioTotal = precios[ubicacion].sabado;
        } else if (dia === "domingo") {
            precioTotal = precios[ubicacion].domingo;
        } else if (dia === "sabado y domingo") {
            precioTotal = precios[ubicacion].sabado + precios[ubicacion].domingo;
        } else {
            alert("Día no válido. Por favor, selecciona sabado, domingo o sabado y domingo.");
            continue; // Reiniciar el ciclo si el día no es válido
        }

        // Preguntar si necesita estacionamiento
        const necesitaEstacionamiento = prompt("¿Necesitas estacionamiento? (si o no):").toLowerCase();

        // Inicializar el precio del estacionamiento
        let precioEstacionamiento = 0;

        if (necesitaEstacionamiento === "si") {
            // Calcular el precio del estacionamiento según el día
            if (dia === "sabado") {
                precioEstacionamiento = estacionamiento.sabado;
            } else if (dia === "domingo") {
                precioEstacionamiento = estacionamiento.domingo;
            } else if (dia === "sabado y domingo") {
                precioEstacionamiento = estacionamiento.sabado + estacionamiento.domingo;
            }

            // Sumar el precio del estacionamiento al precio total
            precioTotal += precioEstacionamiento;
        }

        // Mostrar el resultado final
        if (precioEstacionamiento > 0) {
            alert(`El precio para el sector ${ubicacion.toUpperCase()} el día ${dia.toUpperCase()} es: ${precioTotal} USD (incluye estacionamiento).`);
        } else {
            alert(`El precio para el sector ${ubicacion.toUpperCase()} el día ${dia.toUpperCase()} es: ${precioTotal} USD.`);
        }

        // Preguntar si desea realizar otra consulta
        const respuesta = prompt("¿Deseas consultar otra entrada? (si o no):").toLowerCase();
        if (respuesta !== "si") {
            continuar = false; // Salir del ciclo si el usuario no desea continuar
        }
    }

    alert("Gracias por realizar la consulta de precio.");
}
