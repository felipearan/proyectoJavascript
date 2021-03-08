///Ingresar el monto en CLP de lo que comprará la persona

montoCLP() //Ingresa el monto y certifica que sea numero positivo y no en cero ni texto.

//Ingresar el precio a que quiere comprar el ethereum.
precioEthereum()

//Ingresar si es orden de compra o valor mercado. 
tipoOrden ()

//Mostrar el Q de ethereum y monto de comisión
calculoETh()




//Funciones

//Para ingresar el monto en CLP
function montoCLP(){
    var monto = parseFloat(prompt("Ingresa el monto (en CLP) de cuanto comprarás"));
    while (isNaN(monto)) {
        alert("Monto no valido. Ingresalo nuevamente")
        monto = parseFloat(prompt("Ingresa el monto (en CLP) de cuanto comprarás"));
    } 
    console.log("Es el monto de CLP " + monto)
}

//Para ingresar el precio de ethereum
function precioEthereum(){
    var eth = parseFloat(prompt("Ingresa el precio que quiere comprar el ETH"));
    while (isNaN(eth)) {
        alert("Monto no valido. Ingresalo nuevamente")
        eth = parseFloat(prompt("Ingresa un precio correcto"));
    } 
    console.log("Es el monto de ETH " + eth)
}
// Para 
function tipoOrden(){
    var orden = prompt("Ingresa el tipo de orden (Mercado O Limite)");
    while (orden !== "Mercado" && orden != "Limite") {
        alert("Ingresa un tipo de orden de compra válido")
        orden = prompt("Ingresa el tipo de orden (Mercado O Precio)")
    }
    console.log("El tipo de orden es " + orden)
} 

function calculoETh(orden, monto, eth){
    if (orden = "Mercado") {
        resultadoMercado = parseFloat((monto * eth)* 0,006)
    }
    console.log(resultadoMercado)
}  




/* function obligatePropertyType(obligProp) { // Funcion para obligar a que sea una de las tres opciones

    while (obligProp !== "CASA" && obligProp !== "TERRENO" && obligProp !== "DEPARTAMENTO"){
        obligProp = prompt("Ingresa un tipo validoooo").toUpperCase()
        
    }
    alert("Tipo de propiedad valido")
    return obligProp;

} */


/* 
// Parte 1
const property = prompt('Ingresa el tipo de propiedad: Departamento, Casa o Terreno'); 
let propertyType1 = obligProp(property); // Funcion para obligar un resultado que no sea vacio ni nulo
let finalProperty = obligatePropertyType(propertyType1) // Funcion para obligar que sea un tipo solicitado

// Parte 2
const area = parseFloat(prompt('Ingresa la superficie de la propiedad'));
let finalArea= 0
if (finalProperty === "TERRENO"){  
    finalArea = obligLand(area)
} else {
    finalArea = obligArea(area);
}

// Parte 3
const rooms = parseInt(prompt('Ingresa el numero de habitaciones'));
let finalRooms = obligRooms(rooms);
// Parte 4
const bathrooms = parseInt(prompt('Ingresa el numero de baños'));
let finalBathrooms = obligBathrooms(bathrooms);


// Funciones

// funciones parte 1
function obligProp(prop){
    while (prop == '' || prop == null){ // Funcion para obligar el ingreso de datos en el tipo de propiedad
        prop = prompt('Debes ingresar un tipo de propiedad valido')
    }
    
    return prop.toUpperCase()
}

function obligatePropertyType(obligProp) { // Funcion para obligar a que sea una de las tres opciones

    while (obligProp !== "CASA" && obligProp !== "TERRENO" && obligProp !== "DEPARTAMENTO"){
        obligProp = prompt("Ingresa un tipo validoooo").toUpperCase()
        
    }
    alert("Tipo de propiedad valido")
    return obligProp;

}

// funciones parte 2
function obligArea(squareMt) { //Funcion en caso sea casa o departamento, para tener valor menor a 250 metros cuadrados
    while (isNaN(squareMt) || squareMt >= 250) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad (No mas de 250 m2)"))
    }
    console.log(squareMt)
    return squareMt
}

function obligLand(squareMt) { //Funcion en caso sea terreno, para tener valor mayor a 250 metros cuadrados
    while (isNaN(squareMt)) {
        squareMt = parseFloat(prompt("Debes ingresar un valor para superficie de la propiedad valido"))
    }
    console.log(squareMt)
    return squareMt
}


// funcion parte 3 para obligar el ingreso de datos. No pueden ser mas de 5 habitaciones
function obligRooms(numberOfRooms) {
    while (isNaN(numberOfRooms) || numberOfRooms > 5) {
        numberOfRooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(numberOfRooms)
    return numberOfRooms
}

// funcion parte 4 para obligar el ingreso de datos. No pueden ser mas de 5 baños
function obligBathrooms(numberOfBathrooms) {
    while (isNaN(numberOfBathrooms) || numberOfBathrooms > 5) {
        numberOfBathrooms = parseInt(prompt("Debes ingresar un numero de habitaciones valido (No mas de 5)."))
    }
    console.log(numberOfBathrooms)
    return numberOfBathrooms
}
// Objeto Propiedad

class Property {
    constructor(type, area, rooms, bathrooms){
        this.type = type;
        this.area = area; 
        this.rooms = rooms;
        this.bathrooms = bathrooms;
    }

    valuateProperty() {
        let finalValue = finalArea * 45.5
        alert(`La propiedad es de tipo ${this.type}, con una superficie de ${this.area}, ${this.rooms} habitaciones, ${this.bathrooms} baños y tiene un valor de mercado de ${finalValue}`)
    }
}

const property1 = new Property(finalProperty, finalArea, finalRooms, finalBathrooms)
console.log(property1)
property1.valuateProperty() */