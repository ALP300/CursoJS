//PREGUNTA 1
// Declara tres variables a, b y c con valores numéricos y utiliza condicionales
// para determinar cuál de ellos es el mayor.

const a= parseInt(prompt("El n1 es: "));
const b= parseInt(prompt("El n2 es: "));
const c= parseInt(prompt("El n3 es: "));

if (a>b && a>c){
    console.log("El mayor es: ",a);
}
else if(b>a && b>c){
    console.log("El mayor es: ",b);
}
else{
    console.log("El mayor es: ",c);
}