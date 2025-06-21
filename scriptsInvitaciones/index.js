function actualizarTiempo() {
    console.log("actualizar");
    let dias, horas, minutos;

    let tiempoRestante = new Date("2025-12-07 00:00:00");
    let ahora = new Date();

    let diferencia = Math.abs(ahora - tiempoRestante);
    
    dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= dias * (1000 * 60 * 60 * 24);
    horas = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horas * (1000 * 60 * 60);
    minutos = Math.floor(diferencia / (1000 * 60));
    diferencia -= minutos * (1000 * 60);
    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    

}
console.log("hola");
setInterval(actualizarTiempo, 1000);
actualizarTiempo();