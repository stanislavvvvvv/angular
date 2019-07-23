let select=document.getElementById("generos")
getGenerosPeliculas((generos)=>{
  //for(let i of generos ){
  //   generos.forEach( genero => {
  //      select.innerHTML+=`<option value="${genero"}>${i}</option>`;
  // })
    // let option=document.createElement("option")
    // option.setAttribute("value",i)
    // option.innerText=i
    // select.appendChild(option)
    select.innerHTML += generos.map(genero =>`<option value="${genero}">${genero}</option>` )
})
//event listener
select.onchange = function (evento){
  let lista = document.querySelector('ul');
  getPeliculas(evento.target.value,(peliculas)=>{
    // lista.innerHTML=""
    // peliculas.map((i)=>{
    //   let peli=document.createElement("li")
    //   peli.innerText=i
    //   lista.appendChild(peli)
    // })
    lista.innerHTML = peliculas.map(pelicula => `<li>${pelicula}</li>`)
  })
  
  
}
function getPeliculas(genero,cb){
  let xhr = new XMLHttpRequest()
  xhr.open("GET",`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
  xhr.addEventListener('readystatechange',()=>{
    if (xhr.status===200 && xhr.readyState===4) {
      const resp = JSON.parse(xhr.responseText)
      let peliculas = getArrayFronObject(resp)
      cb(peliculas)
    }
  })
  xhr.send()
}

//cb =callbakck,funcion que recibe como parametroS
function getGenerosPeliculas(cb){
let xhr = new XMLHttpRequest()
xhr.open('GET','https://ejemplos-dc1c1.firebaseio.com/generos.json')
//tiene que esperar a se mande el send() y esperar el estado luego ejectua lo de dentro
xhr.addEventListener("readystatechange",()=>{
if(xhr.status===200 && xhr.readyState===4){
let resp = JSON.parse(xhr.responseText)
let generos = getArrayFronObject(resp)
//call back
cb(generos)
}
})
xhr.send()
}

function getArrayFronObject(obj){
const valores = []
for(let key in obj){
let valor = obj[key]
valores.push(valor)
}
return valores
}

