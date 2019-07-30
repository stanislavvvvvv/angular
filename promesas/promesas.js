import axios from "axios";
const axios = require('axios')
function getGeneros(){
  //then es el callback
  return axios.get('https://ejemplos-dc1c1.firebaseio.com/generos.json')
}

function getPeliculas(genero){
  return axios.get(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
}

getGeneros().then((resp) => {
  //cosas con la resp
  const generos = Object.values(resp.data)
  let genero = 'sci-fi'
  getPeliculas(genero).then( (response) =>{
    const pelicuals = Object.values(response.data)
    console.log(pelicuals)
  })
}
)
