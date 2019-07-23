//funcion que queremos ejecutar solo una vez,anonima,parentesis para que se ejecute una vez y ya esta
var micalculadora = (function(){
  function suma(n1,n2){
    return n1 + n2;
  }
  function resta(n1,n2){
    return n1 - n2;
  }
  function multiplicar(n1,n2){
    return n1 * n2;
  }
  function dividir(n1,n2){
    return n2 == 0 ? "no se puede diviir por 0" : n1 / n2;
  }
  console.log("autoejecutablee");
  return {
    suma: suma,
    resta: resta,
    multiplicar: multiplicar,
    dividir: dividir
  }
})()//funcion que devuelve una objeto con esas funciones

micalculadora.suma(1,2)
micalculadora.resta(1,2)