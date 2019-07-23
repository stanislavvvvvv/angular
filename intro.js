//var let(es6) const(es6)
var a = 1;
let b = 2;
const c = 5;

if (true) {
  var a = 3;
  let b= 4;
  console.log(a)
  console.log(b)
}
console.log(a)
console.log(b)
//for in, tantas veces como elementos haya
let colores = ['blanco','negro','rojo']


console.log("FOR....");
for (let index = 0; index < colores.length; index++) {
  console.log(colores[index])
}

console.log("for in ..");

//i coge los indices,0 1 y 2

for( let i in colores){
  console.log(colores[i])
}
//for of(es6)
//cada objeto del array
console.log("for of.....");

for (const color of colores) {
  console.log(color);
}


//for each
//funcion ejecutada en cada iteracion
console.log("FOR each.........");

function muestraColor(color,pos){
  console.log(pos,color);
}
colores.forEach(muestraColor)

colores.forEach(function (color,pos){ 
  console.log(pos,color);
})


//funcion con array (es6)

colores.forEach((color,pos) => { 
  console.log(pos,color);
})
let suma = (n1,n2) => n1+n2;

//recursividad

function factorial(num){
  if( num == 1)
    return 1
  else
    return num*factorial(num-1)
}
console.log(factorial(5))


//OBjetos y arrays
let mascotas = ['pez','perro','gato','tortuga']
mascotas.push('cocodrilo')
mascotas.pop()
mascotas.unshift('se mete al principio')
mascotas.shift()
let primeramascota = 'hasmter'
//primera posicion quitamos dos elementos y metemos otro
mascotas.splice(1,2,primeramascota)

//copiar dos arras sin apuntar a la misma referencia
let copiamascotas2 = [...mascotas]




let pelicula = {
  titulo:'pelicula 1',
  duracion: 120,
  descripcion: 'descripcion 1'
}
// console.log(pelicula.titulo);
// let titulo = pelicula.titulo
// let duracion = pelicula.duracion
// let descripcion = pelicula.descripcion
//desestructuracion
let {titulo: t,duracion,descripcion} = pelicula

console.log(t);


//objetos
//copia propiedades y valores primero
let peli1 = Object.assign({},pelicula,{duracion:130})

//string interpolation
//${} para acceder a una variable dentro de un string

console.log(`Titulo: ${t}, duracion,descripcion`)

//construtores y rpototype

function Pelicula(titulo,descripcion,duracion,estreno){
  this.titulo=titulo;
  this.descripcion = descripcion;
  this.duracion = duracion;
  this.estreno = estreno
  
}

let peli= new Pelicula('pelicula 2','descripcion 2',120,'2016')
Pelicula.prototype.estrenada = function(){ 
  return new Date().getFullYear() >= this.estreno
}
//PROTOTYPE STRING.....
console.log("PROTOOOOO")

String.prototype.repeat = function(numero){
  var cadena=""
  for (let i = 0; i < numero; i++) {
    cadena+=this.valueOf()
  }
  console.log(cadena)
}
let cadena = 'ESPAÑA...'
console.log(cadena.repeat(3));
console.log(Array(4).join("españita "))
// console.log(cadena.repeat.apply(cadena,3)) para funciones con flecha
//CLASES
console.log("CLASESS")

class Serie {
  constructor(titulo,episodios,descripcion,episodiosVistos=0){
    this.titulo=titulo
    this.episodios=episodios
    this.descripcion=descripcion
    this.episodiosVistos=episodiosVistos
  }
  episodiosPorVer(){
    return this.episodios-this.episodiosVistos
  }
}
let twd = new Serie('the walking dead',100,'va de zombis',43)

//map filter reduce
console.log("REDUCE FILTER MAP");

const nums=[1,2,3,4,5,6,7,8,7,9]
const triplenums = nums.map((n)=>{return n*3})
console.log(triplenums);

const numspares = triplenums.filter((numero)=>{return numero%2===0})
console.log(numspares);

const sumaNumsPares = numspares.reduce((acc,n)=>{
  return acc+=n;
},0)
console.log(sumaNumsPares);
