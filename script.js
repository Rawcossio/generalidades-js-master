// console.log("Hello World!!!") 
// console.log('Hello World!!!');


// prompt('Ingrese cualquier cosa')

/* Variables */

// var nombre = 'Jaime Zapata'
// console.log(nombre)
// var nombre = prompt('Ingrese el nombre de alguien: ')
// console.log(nombre)

/*  */

// var numeroUno = parseInt(prompt('Ingrese un numero: '))
// var numeroDos = parseInt(prompt('Ingrese un numero: '))
// console.log(numeroUno + numeroDos)

// console.log('2' + 2 + '2')
// console.log((2 + 2) + '2')
// console.log((2 + 2) - '2')
// console.log('2' + '2' - '2')

/* Tipos de datos */
// var variable=23
// console.log(typeof(variable))
// var variable="23"
// console.log(typeof(variable))
// var variable=true
// console.log(typeof(variable))
// var variable
// console.log(typeof(variable))
// var variable=null
// console.log(typeof(variable))

/*Condicionales */
// if(5<10){
//     console.log("esto es un condicional simple")
// }else if (5>=5){
//     console.log("esto es un condicional anidado")
// }else{
//     console.log("esto es un condicional compuesto")
// }

// switch(0){
//     case 1:
//         console.log("esta es la opcion 1")
//         break;
//     case 2:
//         console.log("este es el case 2")
//         break;
//     case 3:
//         console.log("esta es opcion 3")
//         break;
//     case 4:
//         console.log("esta es opcion 4")
//         break;
//     default:
//         console.log("no existe la opcion")
//         break;
// }

// let edad=18
// let resultado= edad>=18? true : false 
// console.log(resultado)

// // Determinar si un numero es positivo, negativo o cero

// let numero=10
// if(numero>0){
//     console.log("es positivo")
// }else if(numero<0){
//     console.log("es negativo")
// }else{
//     console.log("es igual a cero")
// }

// // Dado el numero de horas que un automovila estado en un estacionamiento, 
// // escribir un programa que calcule la tarifa.Las primeras 2h son gratis, 
// // despues de eso cada hora adicionla cuesta $5

// let numHora=3
// if(numHora<=2){
//     console.log("parqueadero gratis")
// }else if(numHora>2){
// console.log("su tarifa es: "+(numHora*5))
// }

// //Escriba un programa que me indique si una persona es mayor de 18 y puede votar
// //y, por lo tanto, es elegible para votar. Si no, muestra un mensaje indicando cuantos
// //años faltan para que puede votar 

// var age =16
// var edadrequerida=18
// if(edad>18){
//     console.log("puede votar")
// }else{
//     console.log("no es elegible para votar"+(edadrequerida-edad))
// }

// for(let index=0;index<5;index++){
// console.log('esta es la vuelta: '+index)
// }
// var numero=prompt ('ingrese el numero de la tabla de multiplicar')
// for(let index=0;index<=10;index++){
//     console.log(numero+'*'+index+'='+(numero*index))
//     }
// var sumaSalario=0
// for (var index=1;index<=5;index++){
// var salario=Number(prompt('Ingrese su salario: '))
// sumaSalario+=salario
// }
// console.log('su salario promedio es: '+(sumaSalario/(index-1)))

// var index=1
// var sumaSalario=0
// while(index<=5){
//     var salario=Number(prompt('Ingrese su salario: '))
//     sumaSalario+=salario
//     index++
// }
// console.log('su salario promedio es: '+(sumaSalario/(index-1)))

// var index=1
// var contador=0
// var sumaSalario=0
// while(index==1){
//     var salario=Number(prompt('Ingrese su salario: '))
//     sumaSalario+=salario
//     var opcion=Number(prompt('Desea ingresar otro salario? \n 1=Si \n 2=No'))
//     contador++
//     if(opcion==2){
//         index=2
//     }
// }
// console.log('su salario promedio es: '+(sumaSalario/(contador-1)))

// var index=1
// var sumaSalario=0
// do{
//     var salario=Number(prompt('Ingrese su salario: '))
//     sumaSalario+=salario
//     index++  
// }while(index<=5)
// console.log('su salario promedio es: '+(sumaSalario/(index-1)))

var nombre='Raul Cossio'
let edad=31
if(edad>=18){
    var salario=900000
}
console.log(nombre+'tiene un salario de'+salario)
