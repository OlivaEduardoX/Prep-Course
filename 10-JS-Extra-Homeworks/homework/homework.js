// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var result = [];
  for(let key in objeto){
    let pair = [key, objeto[key]];
    result.push(pair);
  }
  return result;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var result = {};
  for(var i = 0; i < string.length; i++){
    if(result[string.charAt(i)] === undefined){
      result[string.charAt(i)] = 0;
    }
    result[string.charAt(i)] ++;
  }
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var result = "";
  for(var i = 0; i < s.length; i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      result += s.charAt(i);
      s = s.replace(s.charAt(i),"");
      i--;
    }
  }
  return result + s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var result = "";
  var partialResult = "";
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === " "){
      for(var j = partialResult.length - 1; j >= 0; j--){
        result += partialResult.charAt(j);
      }
      if(str.charAt(i) === " "){
        result += " ";
      }
      partialResult = "";
    }else{
      partialResult += str.charAt(i);
    }
  }
  if(partialResult !== ""){
    for(var j = partialResult.length - 1; j >= 0; j--){
        result += partialResult.charAt(j);
    }
  }
  return result;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var original = numero;
  var comparable = 0;
  var i = 0;
  while(numero % 10 > 0){
    aux = numero % 10;
    comparable += (aux * Math.pow(10, i));
    numero = Math.floor(numero / 10);
    i++;
  }
  if(comparable === original){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  for(var i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) === "a" || cadena.charAt(i) === "b" || cadena.charAt(i) === "c"){
      cadena = cadena.replace(cadena.charAt(i), "");
      i--;
    }
  }
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i = 0; i < arr.length - (i + 1); i++){
    for(var j = 0; j < arr.length - 1; j++){
      var aux;
      if(arr[j].length > arr[j + 1].length){
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var result = [];
  for(var i = 0; i < arreglo1.length; i++){
    for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        result.push(arreglo1[i])
      }
    }
  }
  for(var i = 0; i < result.length - 1; i++){
    if(result[i] === result[i + 1]){
      result.splice(i, 1);
      i--;
    }
  }
  return result;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

