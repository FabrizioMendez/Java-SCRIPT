// solicitamos el nombre del jugador:
let nombre = prompt("Ingrese su nombre")
;
// le decimos al juagador que resuelva un acertijo, si lo hace pasa a la siguiente etapa, sino pierde.
alert("¿Listo para jugar "  + nombre + " ?")
alert(nombre + ", ahora tenes que responder la siguiente pregunta");
// arrancamos a definir la primera pregunta:

let respuesta1 = "";

while (respuesta1 !== "aji"){
    respuesta1 = prompt("Rojo, amarillo, verde, pica pero no muerde ¿Que es?");
    if (respuesta1 == "aji"){
        alert("FELICITACIONES GANASTEE!!!");
        break;
    }else
    alert("Ponele Voluntaad")
}