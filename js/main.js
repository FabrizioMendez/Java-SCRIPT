// Arrancamos a ver ciclos

for (let i = 0; i <= 5; i++){
    console.log(i);
}

// ES LO MISMO
// i =  i + 1
// sintaxis sugar
// i++



// EJEMPLO 1 
// HACEMOS LA TABLA DEL 2

let tabla = 2;
let resultado;

for (let i = 1; i <= 10; i++){
    resultado = tabla * i;
    console.log(tabla + " x " + i + " es igual a " + resultado);
}




// EJEMPLO 2
// PEDIMOS TURNO CON NOMBRE DEL 1 AL 20

// for (let i = 1; i <= 20; i++){
//     let ingresarNombre = prompt("Ingresar Nombre");
//     alert(" Turno N° " + i + " Nombre: " + ingresarNombre);
// }







// EJEMPLO 3
// TABLA DEL 5

let tablas = 5;
let resultados;
for (let i = 1; i<=10; i++){
    resultados = tablas * i;
    console.log(tablas + " x " + i + " es igual a " + resultados); 
}






// AHORA VAMOS CON "WHILE"

let repetir = true;
let i = 0;

while (repetir == true){
    i = i +3;
    console.log("Al infinito y...¡Más allá!");

    if (i >= 10){
        repetir = false;
    }
}



// OTRO EJEMPLO CON WHILE

let entrada = "";

while (entrada!= "ESC"){
    entrada = prompt("Ingresar otro dato");
    alert ("El usuario ingresó " + entrada);
}



// MISMO EJEMPLO PERO CON DO 

let entradas = "";

do{
    entradas = prompt("Ingresar otro dato");
    alert("El usuario ingresó " + entradas);
} while (entrada != "ESC");





// VAMOS CON OTRO TEMA "NADA QUE VER"
// SERIA EL "SWITCH"

let nota = 3;

switch(nota){
    case 1:
        alert("A diciembre");
        break;
    case 2:
        alert("A diciembre");
        break;
    case 3:
        alert("A diciembre");
        break;
    case 4:
        alert("A diciembre");
        break;
    case 5:
        alert("A diciembre");
        break;
    case 6:
        alert("Uyy zafaste");
        break;
    case 7:
        alert("Ah bueno, lindo esfuerzo");
        break;
    case 8:
        alert("Buenaaa notaaa paaaaaa");
        break;
    case 9:
        alert("Esaaa casi metes la del diegotee");
        break;
    case 10:
        alert("ANASHEEEEEEEEEEE");
        break;
}