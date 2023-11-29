ProgramaPrincipal();


function ProgramaPrincipal(){
    console.log("BIENVENIDOS AL GENERADOR DE DATOS DE TARJETAS\nPara acceder al generador debes conocer las credenciales secretas\n¿Quieres Iniciar Sesión?\n1-Login\n2-Salir");

    
    let Respuesta = prompt("Ingrese Respuesta")
    
    while(Respuesta.toUpperCase() == "1"){
        let usuario = prompt("Ingrese Usuario");
        let pass = prompt("Ingrese Password");
    
        if(usuario == "coder" && pass == "123"){
            alert("Credenciales Validas!");
            console.log("Que tipo de tarjeta deseas generar datos?\n1-VISA\n2-MASTERCARD\n3-FALABELLA\n4-SALIR" );
            let tarjeta = prompt("Ingrese Opción");
            switch(tarjeta.toUpperCase()){
                case "1":
                    let numeroSerie1 = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                    let fechaVencimiento1 = generarFechaVencimiento();
                    let codigoCVV1 = generarCodigoCVV();
    
                    console.log("-----------------------------------------\nVISA\nNúmero de serie: " + numeroSerie1 + "\nFecha de vencimiento: " + fechaVencimiento1 + "\nCódigo CVV: " + codigoCVV1 + "\n-----------------------------------------");
    
                    console.log("1-Generar Otros Datos\n2-Salir")
                    let opcion2 = prompt("Ingrese Opción");
                    while(opcion2 != "2"){
                        numeroSerie1 = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                        fechaVencimiento1 = generarFechaVencimiento();
                        codigoCVV1 = generarCodigoCVV();
    
                        console.log("-----------------------------------------\nVISA\nNúmero de serie: " + numeroSerie1 + "\nFecha de vencimiento: " + fechaVencimiento1 + "\nCódigo CVV: " + codigoCVV1 + "\n-----------------------------------------");
                        console.log("1-Generar Otros Datos\n2-Salir")
                        opcion2 = prompt("Ingrese Opción"); 
                    }
                    break;
                    
                case "2":
                    let numeroSerie2 = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                    let fechaVencimiento2 = generarFechaVencimiento();
                    let codigoCVV2 = generarCodigoCVV();

                    console.log("-----------------------------------------\nMASTERCARD\nNúmero de serie: " + numeroSerie2 + "\nFecha de vencimiento: " + fechaVencimiento2 + "\nCódigo CVV: " + codigoCVV2 + "\n-----------------------------------------");

                    console.log("1-Generar Otros Datos\n2-Salir")
                    let opcion3 = prompt("Ingrese Opción");
                    while(opcion3 != "2"){
                        numeroSerie2 = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                        fechaVencimiento2 = generarFechaVencimiento();
                        codigoCVV2 = generarCodigoCVV();
    
                        console.log("-----------------------------------------\nMASTERCARD\nNúmero de serie: " + numeroSerie2 + "\nFecha de vencimiento: " + fechaVencimiento2 + "\nCódigo CVV: " + codigoCVV2 + "\n-----------------------------------------");
                        console.log("1-Generar Otros Datos\n2-Salir")
                        opcion3 = prompt("Ingrese Opción");
                      
                    }
                    break;
    
                case "3":
                    let numeroSerie = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                    let fechaVencimiento = generarFechaVencimiento();
                    let codigoCVV = generarCodigoCVV();

                    console.log("-----------------------------------------\nFALABELLA\nNúmero de serie: " + numeroSerie + "\nFecha de vencimiento: " + fechaVencimiento + "\nCódigo CVV: " + codigoCVV + "\n-----------------------------------------");

                    console.log("1-Generar Otros Datos\n2-Salir")
                    let opcion4 = prompt("Ingrese Opción");
                    while(opcion4 != "2"){
                        numeroSerie3 = generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie() + " " + generarNumeroSerie();
                        fechaVencimiento3 = generarFechaVencimiento();
                        codigoCVV3 = generarCodigoCVV();
    
                        console.log("-----------------------------------------\nFALABELLA\nNúmero de serie: " + numeroSerie + "\nFecha de vencimiento: " + fechaVencimiento + "\nCódigo CVV: " + codigoCVV + "\n-----------------------------------------");
                        console.log("1-Generar Otros Datos\n2-Salir");
                        opcion4 = prompt("Ingrese Opción");

                    }
                    break;

                case "4":
                   break;
                default:
                    console.log("Ingrese Tarjeta Valida"); 
                    tarjeta = (prompt("Ingrese Tarjeta")).toUpperCase;
            } 
            
            Respuesta = "2"
    
    
        }else{
            console.log("Credenciales invalidas, reintente.")
            console.log("¿Quieres Iniciar Sesión?\n1-Login\n2-Salir")
            Respuesta = prompt("Ingrese Opción")
        }

    }
    alert("Generador Cerrado.")

}
function generarNumeroSerie() {
    // Generar un número de serie aleatorio
    return (
        Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    );
}

  
  function generarFechaVencimiento() {
    // Generar una fecha de vencimiento aleatoria
    var mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    var ano = String(Math.floor(Math.random() * (2030 - 2025 + 1)) + 2025);
    return mes + "/" + ano;
  }
  
  function generarCodigoCVV() {
    // Generar un código CVV aleatorio de tres dígitos
    return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
  }
