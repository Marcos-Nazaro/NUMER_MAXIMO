/*Leer valores hasta que se introduzca un cero (0)
El usuario puede introducir valores positivos y negativos
Encontrar el máximo de los elementos que se introdujeron
Analizar cómo cambia el programa para hallar el mínimo
*/


let ImpUser: number = Number(prompt("Ingrese un numero a la serie"));
let MaxNumber: number = ImpUser;
let SinDatos: Boolean = false;

while (ImpUser !== 0) {
  SinDatos = true;
  ImpUser = Number(prompt("Ingrese un numero a la serie"));
  if (ImpUser > MaxNumber) {
    MaxNumber = ImpUser;
  }
}
if (SinDatos) {
  console.log(`El numero maximo de la serie es: ${MaxNumber}`);
} else {
  console.log(`El programa termino sin datos ingresados`);
}

/* 
programa que en vez de numero maximo halla el numero minimo
*/

/*
let ImpUser: number = Number(prompt("Ingrese un numero a la serie"));
let MaxNumber: number = ImpUser;
let SinDatos: Boolean = false;

while (ImpUser !== 0) {
  SinDatos = true;
  ImpUser = Number(prompt("Ingrese un numero a la serie"));
  if (ImpUser < MaxNumber) {
    MaxNumber = ImpUser;
  }
}
if (SinDatos) {
  console.log(`El numero minimo de la serie es: ${MaxNumber}`);
} else {
  console.log(`El programa termino sin datos ingresados`);
}

*/