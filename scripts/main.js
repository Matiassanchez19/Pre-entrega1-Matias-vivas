function calcularPrecio() {
    // Definir precios usando un array de objetos
    const precios = [
        { ubicacion: "general", sabado: 5, domingo: 7 },
        { ubicacion: "platea", sabado: 12, domingo: 15 },
        { ubicacion: "vip", sabado: 23, domingo: 25 },
        { ubicacion: "boxes", sabado: 50, domingo: 60 }
    ];

    // Precios del estacionamiento en un objeto
    const preciosEstacionamiento = { sabado: 10, domingo: 12 };

    let continuar = true; 

    // Funcion para buscar los precios de entrada segun la ubicacion
    function buscarPrecioPorUbicacion(ubicacion) {
        return precios.find((entrada) => entrada.ubicacion === ubicacion);
    }

    // 4. Funcion para calcular el precio total
    function calcularPrecioTotal(ubicacion, dia, necesitaEstacionamiento) {
        const entrada = buscarPrecioPorUbicacion(ubicacion);
        if (!entrada) {
            return null;
        }

        let precioEntrada = 0; 
        let precioEstacionamiento = 0; 

        // Calcular el precio segun el dia
        if (dia === "sabado") {
            precioEntrada = entrada.sabado;
            if (necesitaEstacionamiento) {
                precioEstacionamiento = preciosEstacionamiento.sabado;
            }
        } else if (dia === "domingo") {
            precioEntrada = entrada.domingo;
            if (necesitaEstacionamiento) {
                precioEstacionamiento = preciosEstacionamiento.domingo;
            }
        } else if (dia === "sabado y domingo") {
            precioEntrada = entrada.sabado + entrada.domingo;
            if (necesitaEstacionamiento) {
                precioEstacionamiento = preciosEstacionamiento.sabado + preciosEstacionamiento.domingo;
            }
        }

        // Sumar el precio de la entrada y del estacionamiento
        return precioEntrada + precioEstacionamiento;
    }

    // Iniciar el ciclo principal
    while (continuar) {
        const ubicacion = prompt("Selecciona una ubicacion (general, platea, vip, boxes):").toLowerCase();
        if (!buscarPrecioPorUbicacion(ubicacion)) {
            alert("Ubicacion no valida. Intenta de nuevo.");
            continue; 
        }

        
        const dia = prompt("Selecciona el dia (sabado, domingo o sabado y domingo):").toLowerCase();

        // Validar si el dia es correcto
        if (!["sabado", "domingo", "sabado y domingo"].includes(dia)) {
            alert("Dia no valido. Intenta de nuevo.");
            continue; // Reiniciar el ciclo si el dia no es valido
        }

        // Preguntar si necesita estacionamiento
        const necesitaEstacionamiento = prompt("¿Necesitas estacionamiento? (si o no):").toLowerCase() === "si";

        // Calcular el precio total
        const precioTotal = calcularPrecioTotal(ubicacion, dia, necesitaEstacionamiento);

        // Mostrar el precio al usuario
        alert(
            `El precio para la ubicacion ${ubicacion.toUpperCase()} el día ${dia.toUpperCase()} es: ${precioTotal} USD.` +
            (necesitaEstacionamiento ? " (Incluye estacionamiento)" : "")
        );

        // Preguntamos si quieren hacer otra consulta
        const respuesta = prompt("¿desea consultar otra entrada? (si o no):").toLowerCase();
        if (respuesta !== "si") {
            continuar = false; // Salir del ciclo si el usuario no desea continuar
        }
    }

    alert("Gracias por realizar la consulta de precios.");
}