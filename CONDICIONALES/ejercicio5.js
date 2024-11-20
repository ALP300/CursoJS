//CALCULADORA
const operacion = prompt(
  "Selecciona una operación: suma, resta, multiplicacion, división, raíz"
).toLowerCase();

let numero1, numero2;

switch (operacion) {
  case "suma":
    numero1 = parseFloat(prompt("Ingresa el número 1: "));
    numero2 = parseFloat(prompt("Ingresa el número 1: "));
    console.log(`La suma es: ${numero1 + numero2}`);
    break;

  case "resta":
    numero1 = parseFloat(prompt("Ingresa el número 1: "));
    numero2 = parseFloat(prompt("Ingresa el número 1: "));
    console.log(`La resta es: ${numero1 - numero2}`);
    break;

  case "multiplicacion":
    numero1 = parseFloat(prompt("Ingresa el número 1: "));
    numero2 = parseFloat(prompt("Ingresa el número 1: "));
    console.log(`La suma es: ${numero1 * numero2}`);
    break;

  case "division":
    numero1 = parseFloat(prompt("Ingresa el número 1: "));
    numero2 = parseFloat(prompt("Ingresa el número 1: "));
    if (numero2 !== 0) {
      console.log(`El resultado de la división es:${numero1 / numero2} `);
    } else {
      console.log(`No se puede dividir entre 0 `);
    }
    break;

  case "raiz":
    numero1 = parseFloat(prompt("Ingresa el número 1 para calcular la raíz cuadrada: "));
    if(numero1>=0){
        console.log(`La raíz cuadrada de ${numero1} es: ${Math.sqrt(numero1)}`)
    }else{
        console.log("No se puede calcular la raíz de un negativo")
    }
    break;

    default:
        console.log("Operación no disponible")
}


