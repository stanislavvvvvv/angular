//PROMESAS
// console.log(1);
// setTimeout(()=>{
//   console.log(2)
// },0)
// console.log(3)


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

function getPeliculas(genero){
  let xhr = new XMLHttpRequest()
  xhr.open("GET",`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
  xhr.addEventListener('readystatechange',()=>{
    if (xhr.status===200 && xhr.readyState===4) {
      const resp = JSON.parse(xhr.responseText)
      console.log(resp);
    }
  })
  xhr.send()
}

getGenerosPeliculas((generos)=>{
  let genero=elegirGenero(generos)
  getPeliculas(genero)
})

function elegirGenero(generos){
  let genero = prompt(`Elige un genero de los siguentes: ${generos}`)
  return genero
}

function getArrayFronObject(obj){
  const valores = []
  for(let key in obj){
    let valor = obj[key]
    valores.push(valor)
  }
  return valores
} 


//promessaaaasssss