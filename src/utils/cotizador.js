export function calcularCotizacion({
    origenDestino,
    peso,
    servicio,
    recoleccion,
    seguro
}) {
    let costoBase = 0;
    let costoPeso = Number(peso) * 5; // $5 per kg
    let costoDistancia = 0;
    let tiempoEstimado = "";

    if (origenDestino === "misma-ciudad") {
        costoBase = 25;
        costoDistancia = 10;
        tiempoEstimado = "Same day or next day";
    }else if (origenDestino === "otro-departamento") {
        costoBase = 40;
        costoDistancia = 20;
        tiempoEstimado = "1 to 3 days";
    }else if (origenDestino === "internacional") {
        costoBase = 90;
        costoDistancia = 50;
        tiempoEstimado = "5 to 10 days";
    }

    if (servicio === "express"){
        costoBase += 20;
    }

    if (recoleccion){
        costoBase += 15;
    }

    if (seguro){
        costoBase += 15;
    }

    const total = costoBase + costoPeso + costoDistancia;

    return {
        costoBase,
        costoPeso,
        costoDistancia,
        total,
        tiempoEstimado
    };

}