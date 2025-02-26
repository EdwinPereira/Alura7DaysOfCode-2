// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?   
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt ("¿Qué lenguaje de programación estás estudiando?");
let nombreInternauta = document.getElementById("nombre");
let edadInternauta = document.getElementById("edad");
let lenguajeInternauta = document.getElementById("lenguaje");
function agregarNombre() {  
    return nombreInternauta.innerHTML = nombre;
}
agregarNombre();
function agregarEdad() {  
    return edadInternauta.innerHTML = edad;
}
agregarEdad();
function agregarLenguaje() {
    return lenguajeInternauta.innerHTML = lenguaje;
}
agregarLenguaje();
alert(`Hola ${agregarNombre()}, tienes ${agregarEdad()} años y ya estás aprendiendo ${agregarLenguaje()}.`);

/*Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?*/
let lenguajeConsulta = "Java";
let pregunta = prompt(`¿Te gusta estudiar ${lenguajeConsulta}? Responde con el número 1 para SÍ o 2 para NO.`);
let respuesta = document.getElementById("respuestaLenguaje");
if(pregunta == 1) {
    let mensajeRespuestaUno = `¡Muy bien! Sigue estudiando ${lenguajeConsulta} y tendrás mucho éxito.`
    alert(mensajeRespuestaUno);
    respuesta.innerHTML = mensajeRespuestaUno;
}
if(pregunta == 2) {
    let mensajeRespuestaDos = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    alert(mensajeRespuestaDos);
    respuesta.innerHTML = mensajeRespuestaDos;
}
