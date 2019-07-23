var idiomas = {
   en : {
    'hola': 'hello', 
    'adios': 'bye'
  },
   fr : {
    'hola': 'bonjour',
    'adios': 'au revoir'
  },
   ru : {
    'hola': 'privet',
    'adios': 'do svidanie'
  }
}
var Traductor = (function(){
  function traducir(palabra,idioma){
    return idiomas[idioma][palabra]
  }

  return {
    traducir: traducir
  }
})()
console.log(Traductor.traducir('hola','ru'));

//Traductor.traducir("hola","es")