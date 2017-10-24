var config4 = liquidFillGaugeDefaultSettings();
    config4.circleThickness = 0.15; //grosor del circulo externo
    config4.circleColor = "blue"; //color del circulo exterior
    config4.textColor = "#555500"; //color del texto del circulo interno
    config4.waveTextColor = "white"; //color cuando la ola supera el txt
    config4.waveColor = "#178BCA";  //relleno de la onda
    config4.textVertPosition = 0.5; //posicion veetical del texto
    config4.waveAnimateTime = 1000; //velocidad de la onda del agua
    config4.waveHeight = 0.05; //altura de la onda de la ola
    config4.waveAnimate = true; // animacion de la ola
    config4.waveRise = false; //onda ascendente
    config4.waveHeightScaling = false; //escala altura de la ola
    config4.waveOffset = 0.25; //compensacion
    config4.textSize = 0.65; //tamaño del texto
    config4.waveCount = 3; //numero de ondas de la ola

var gauge5 = loadLiquidFillGauge("fillgauge5",60.4, config4);
    
function NewValue(){

    var lleno = 3000;
    var vacio = 0;
    var porcentaje = 100;

    var mensaje = document.getElementById("temp").innerHTML;

    if (mensaje <= 0) {
        mensaje = 0;
        return mensaje
    }else{
        mensaje = mensaje*porcentaje/3000;  
        return mensaje;
   
    }

    
}