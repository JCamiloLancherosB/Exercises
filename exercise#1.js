// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let count = 0;
let contadorKeys = 0;

const cuenta = (string) => {
    //Aún no cuenta los espacios en blanco " "
    if(typeof string === "string") {
        //Creo un contador extra para poder reestablecer el primero cada vez que se devuelva un valor y así no ir sumando el contador sin parar en cada llamada de la función.
        let contadorFinal;
        
        //Si es un string significa que el parametro lo pasaron con comillas dobles, las cuales también vamos a contar sumando dos al contador.
        count += 2;
        count += Array.from(string).length;
        console.log(count)
        contadorFinal = count;
        count = 0;
        console.log(contadorFinal)
        console.log(count)
        return contadorFinal;
    }
    
    if(typeof string === "object") {
        //Suma dos porque cada objeto está envuelto por corchetes ({})
        count += 2;
        
        //Creo un contador extra para poder reestablecer el primero cada vez que se devuelva un valor y así no ir sumando el contador sin parar en cada llamada de la función.
        let contadorFinal = 0;

        let keys = Object.keys(string), values = Object.values(string);

        //Por cada key aumentar uno porque sabemos que lo que separa a cada key es una coma (,) la cual también estaremos contando, y como la última key no lleva coma para separar vamos a restar 1
        //al valor del contador. 
        if(keys.length >= 2) {            
            keys.forEach(function(element) {
                count += 1;
            })
            count += -1;
        }

        keys.forEach(function(element) {        
            //Por cada key queremos aumentarlo uno, porque sabemos que después de cada key va un carácter de dos puntos (:) el cual también estaremos contando, además de la longitud de la key misma.
            count += Array.from(element).length + 1;
            // keys.shift(element);
            // console.log(keys.shift(element))
            // let indice = keys.indexOf(element);
            // keys.splice(indice, 1);
        })

        values.forEach(function(element) {
            //Si es de tipo string sumar dos por las comillas que envuelven al string ("") y sumar la longitud del string.
            if(typeof element === "string") {
                count += element.length + 2;
                // values.shift(element); //Hemos añadido los 
            }
            //Si es de tipo objeto volver a sacar longitudes de keys y values. Llamando a la función de nuevo.
            if(typeof element === "object") {
                cuenta(element);
                // cuenta(values.shift(element));
            }
        })
    }
    
    contadorKeys = count;
    count = 0;
    console.log(contadorKeys)
    return contadorKeys
}

// console.log(cuenta("obj"))
// console.log(cuenta({obj: "value1"}))
console.log(cuenta({obj:{key1:"value1",key2:"value2"},obj2:{key2:"value3"}}))
console.log(cuenta({obj:{key1:"value1",key2:"value2"},obj2:{key2:"value2"}}))

//Agregar variable para poder reestablecer el contador inicial sobre el cual trabajamos durante toda la función y poder volver llamar la función sin guardar valores anteriores

//Cada vez que se retorne el valor del contador lo ideal sería reestablecer dicho contador en 0 para que pueda seguir juntando el conteo de los caracteres por cada llamada a la función
//Si el objeto solo tiene una key y un valor significa que no tiene una coma después del primer valor ya que no va a separar a la siguiente key, entonces preguntar si la cantidad de keys de un objeto es menor o igual
//a 1 si es mayor o igual a 2 sumar uno, después de dos por cada key que tenga el objeto debemos sumar 1 por la coma que le sigue al valor antes de pasar a la siguiente key 

//Si la cantidad de keys de un objeto es mayor o igual a 2 significa que esta keys tiene hermanos, por cada hermano habrá una coma que lo separe con el otro 
//Si el objeto solo tiene una key definitivamente no tiene hermanos entonces no habrán comas para sumar en el contador
//Por cada key sumar una coma, mientras las keys sean mayores o iguales a 2, es decir, si tengo 3 keys debo sumar 2 porque tendremos dos comas, la última key nunca lleva coma, por lo tanto será la cantidad de keys
//menos la primera -1, para tomar las comas totales entre valores necesitaremos sumar la cantidad de keys restando 1 
//Entonces implementar este if y quitar el que suma 1 por cada valor que hay 





















