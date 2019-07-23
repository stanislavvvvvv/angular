

//PROMESAS
console.log(1);
setTimeout(()=>{
  console.log(2)
},0)
console.log(3)
getGenerosPeliculas()
function getGenerosPeliculas(){
  let xhr = new XMLHttpRequest()
  xhr.open('GET','https://ejemplos-dc1c1.firebaseio.com/generos.json')
  xhr.addEventListener("readystatechange",()=>{
    if(xhr.status===200 && xhr.readyState===4){
      let resp = JSON.parse(xhr.responseText)
      console.log(resp)
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