/* Fecha  */


    $("#fecha").ready(function() {
        var d = new Date()
        $("#fecha").text(d.toDateString())
    })


/* CALCULADORA BITCOIN */

async function capturarDatosBtc () {

    //Obtener los datos de los inputs
        let montoClpbtc = parseInt(document.getElementById("montoClpbtc").value)
        console.log(montoClpbtc)
        
        let precioBtc = parseInt(document.getElementById("precioBtc").value)
        console.log(precioBtc)
    
        let valorBtc = document.getElementById("listadoBtc").value;
        if (valorBtc === "1"){
            valorBtc = 0.006 
        } else if (valorBtc === "2"){
            valorBtc = 0.0025
        }
        console.log(valorBtc)
    
        let calculoBtc = ((montoClpbtc / precioBtc) * (1 - valorBtc))
        console.log(calculoBtc)
        return calculoBtc
        
    }
    
    // crear nodo
        async function crearNodosBtc (){
    
        let calculoBtc = await capturarDatosBtc () //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode("Tu cantidad de Bitcoin " + calculoBtc)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalBtc").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoBtc)
        
    } 
    
    /* CALCULADORA ETHEREUM */


async function capturarDatosEth() {

    //Obtener los datos de los inputs
        let montoClp = parseInt(document.getElementById("montoClp").value)
        console.log(montoClp)
        
        let precioEth = parseInt(document.getElementById("precioEth").value)
        console.log(precioEth)
    
        let valor = document.getElementById("listado").value;
        if (valor === "1"){
            valor = 0.006 
        } else if (valor === "2"){
            valor = 0.0025
        }
        console.log(valor)
    
        let calculoEth = ((montoClp / precioEth) * (1 - valor))
        console.log(calculoEth)
        return calculoEth
        
    } 

    /* 
        let textoPrincipal = document.getElementById("textoPrincipal")
        document.getElementById("imgPrincipal").removeChild(textoPrincipal)  */
    
    // crear nodo
       async function crearNodosEth (){
    
        let calculoEth = await capturarDatosEth() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode("Tu cantidad de ETH" + calculoEth)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalEth").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoEth)
        
    }  
    
    /* CALCULADORA BITCOIN CASH */


async function capturarDatosBch() {

    //Obtener los datos de los inputs
        let montoClpBch = parseInt(document.getElementById("montoClpBch").value)
        console.log(montoClp)
        
        let precioBch = parseInt(document.getElementById("precioBch").value)
        console.log(precioEth)
    
        let valorBch = document.getElementById("listadoBch").value;
        if (valorBch === "1"){
            valorBch = 0.006 
        } else if (valorBch === "2"){
            valorBch = 0.0025
        }
        console.log(valorBch)
    
        let calculoBch = ((montoClpBch / precioBch) * (1 - valorBch))
        console.log(calculoBch)
        return calculoBch
        
    }
    
    
    // crear nodo
        async function crearNodosBch (){
    
        let calculoBch = await capturarDatosBch() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode("Tu cantidad de BCH " + calculoBch)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalBch").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoBch)
        
    } 
    
    /* CALCULADORA LITECOIN */
    
    /* document.getElementById("calculoFinalLtc").addEventListener("click", crearNodosLtc, {once:true}) */
/* document.getElementById("calculoFinal").addEventListener("mouseover", pintar)
document.getElementById("calculoFinal").addEventListener("mouseout", pintar) */


async function capturarDatosLtc() {

    //Obtener los datos de los inputs
        let montoClpLtc = parseInt(document.getElementById("montoClpLtc").value)
        console.log(montoClpLtc)
        
        let precioLtc = parseInt(document.getElementById("precioLtc").value)
        console.log(precioLtc)
    
        let valorLtc = document.getElementById("listadoLtc").value;
        if (valorLtc === "1"){
            valorLtc = 0.006 
        } else if (valorLtc === "2"){
            valorLtc = 0.0025
        }
        console.log(valorLtc)
    
        let calculoLtc = ((montoClpLtc / precioLtc) * (1 - valorLtc))
        console.log(calculoLtc)
        return calculoLtc
        
    }
    
    /* 
        let textoPrincipal = document.getElementById("textoPrincipal")
        document.getElementById("imgPrincipal").removeChild(textoPrincipal)  */
    
    // crear nodo
        async function crearNodosLtc (){
    
        let calculoLtc = await capturarDatosLtc() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode("Tu cantidad de Litecoin " + calculoLtc)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalLtc").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoLtc)
        
    } 
    
    
    
    
    