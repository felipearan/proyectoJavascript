

/* CALCULADORA BITCOIN */

async function capturarDatosBtc () {

    //Obtener los datos de los inputs
        var montoClp = parseInt(document.getElementById("montoClpbtc").value)
        
        
        let precioBtc = parseInt(document.getElementById("precioBtc").value)
        
    
        let valorBtc = document.getElementById("listadoBtc").value;
        if (valorBtc === "1"){
            valorBtc = 0.006 
        } else if (valorBtc === "2"){
            valorBtc = 0.0025
        }
        
    
        let calculoBtc = ((montoClp / precioBtc) * (1 - valorBtc))
        
        return calculoBtc
        
    }
    async function montoInvertidoBitcoin() {
        var montoClp = parseInt(document.getElementById("montoClpbtc").value)
       return montoClp
    }


    // crear nodo
        async function crearNodosBtc (){
    
        let calculoBtc = await capturarDatosBtc () //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode(calculoBtc)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalBtc").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
        

        let montoInvertidoBTC = await montoInvertidoBitcoin() 

        let capitalInvertido = document.createElement("p") 

        capitalInvertido.setAttribute("class", "p")

        let capitalInvertidoBTC = document.createTextNode(montoInvertidoBTC)
        
        capitalInvertido.appendChild(capitalInvertidoBTC)

        document.getElementById("capitalInvertidoBitcoin").appendChild(capitalInvertido)

        capitalInvertido.setAttribute("id", "capitalInvertidoFinalBitcoin")
        
        let y = x++
    
        let valor = document.getElementById("texto");
        let texto = document.createTextNode(valor)
        let titulo = document.createElement("p")
        let lista = document.getElementById("listaBtc")
        
        let numero = document.createTextNode(y)
        titulo.appendChild(numero)
        lista.appendChild(titulo)

        
        titulo.appendChild(texto)
        lista.appendChild(titulo)
        
        document.getElementById("form").reset();
       
        }



    /* CALCULADORA ETHEREUM */


async function capturarDatosEth() {

    //Obtener los datos de los inputs
        var montoClp = parseInt(document.getElementById("montoClpEth").value)
        
        let precioEth = parseInt(document.getElementById("precioEth").value)
        
    
        let valor = document.getElementById("listadoEth").value;
        if (valor === "1"){
            valor = 0.006 
        } else if (valor === "2"){
            valor = 0.0025
        }
        
        
        let calculoEth = ((montoClp / precioEth) * (1 - valor))
        return calculoEth
        
    } 
    async function montoInvertido() {
        var montoClp = parseInt(document.getElementById("montoClpEth").value)
       return montoClp
    }


let x = 1
   
    // crear nodo
       async function crearNodosEth (){
    
        let calculoEth = await capturarDatosEth() //espera a la funcion de forma asincrona

        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode(calculoEth)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalEth").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")


        let montoInvertidoEth = await montoInvertido() 

        let capitalInvertido = document.createElement("p") 
    
        capitalInvertido.setAttribute("class", "p")

        let capitalInvertidoETH = document.createTextNode(montoInvertidoEth)
        
        capitalInvertido.appendChild(capitalInvertidoETH)

        document.getElementById("capitalInvertidoEthereum").appendChild(capitalInvertido)

        capitalInvertido.setAttribute("id", "capitalInvertidoFinalEth")
    
        
        let y = x++
    
        let valor = document.getElementById("texto");
        let texto = document.createTextNode(valor)
        let titulo = document.createElement("p")
        let lista = document.getElementById("listaEth")
        let numero = document.createTextNode(y)
        titulo.appendChild(numero)
        lista.appendChild(titulo)
        titulo.appendChild(texto)
        lista.appendChild(titulo)
        document.getElementById("form").reset();
        }
  
    
    /* CALCULADORA BITCOIN CASH */


async function capturarDatosBch() {

    //Obtener los datos de los inputs
        var montoClpBch = parseInt(document.getElementById("montoClpBch").value)
        
        
        let precioBch = parseInt(document.getElementById("precioBch").value)
        
    
        let valorBch = document.getElementById("listadoBch").value;
        if (valorBch === "1"){
            valorBch = 0.006 
        } else if (valorBch === "2"){
            valorBch = 0.0025
        }
        
    
        let calculoBch = ((montoClpBch / precioBch) * (1 - valorBch))
        
        return calculoBch
    }
    async function montoInvertidoBitcoincash() {
        var montoClpBch = parseInt(document.getElementById("montoClpBch").value)
       return montoClpBch
    }
    
    // crear nodo
        async function crearNodosBch (){
    
        let calculoBch = await capturarDatosBch() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode(calculoBch)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalBch").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoBch)



        let montoInvertidoBCH = await montoInvertidoBitcoincash() 

        let capitalInvertido = document.createElement("p") 

        capitalInvertido.setAttribute("class", "p")

        let capitalInvertidoBCH = document.createTextNode(montoInvertidoBCH)
        
        capitalInvertido.appendChild(capitalInvertidoBCH)

        document.getElementById("capitalInvertidoBitcoincash").appendChild(capitalInvertido)

        capitalInvertido.setAttribute("id", "capitalInvertidoFinalBitcoincash")
        
        let y = x++
    
        let valor = document.getElementById("texto");
        let texto = document.createTextNode(valor)
        let titulo = document.createElement("p")
        let lista = document.getElementById("listaBcash")
        
        let numero = document.createTextNode(y)
        titulo.appendChild(numero)
        lista.appendChild(titulo)

        
        titulo.appendChild(texto)
        lista.appendChild(titulo)
        
        document.getElementById("form").reset();
       
        }
    
    /* CALCULADORA LITECOIN */

async function capturarDatosLtc() {

    //Obtener los datos de los inputs
        var montoClpLtc = parseInt(document.getElementById("montoClpLtc").value)
        
        
        let precioLtc = parseInt(document.getElementById("precioLtc").value)
        
    
        let valorLtc = document.getElementById("listadoLtc").value;
        if (valorLtc === "1"){
            valorLtc = 0.006 
        } else if (valorLtc === "2"){
            valorLtc = 0.0025
        }
        
    
        let calculoLtc = ((montoClpLtc / precioLtc) * (1 - valorLtc))
        
        return calculoLtc 
    }

    async function montoInvertidoLitecoin() {
        var montoClpLtc = parseInt(document.getElementById("montoClpLtc").value)
       return montoClpLtc
    }
    
    
    // crear nodo
        async function crearNodosLtc (){
    
        let calculoLtc = await capturarDatosLtc() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("p") 
    
        textoFinal.setAttribute("class", "p")
    
        let textoFinalCalculo = document.createTextNode(calculoLtc)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalLtc").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        /* localStorage.setItem('inversion',calculoLtc) */

        let montoInvertidoLTC = await montoInvertidoLitecoin() 

        let capitalInvertido = document.createElement("p") 

        capitalInvertido.setAttribute("class", "p")

        let capitalInvertidoLTC = document.createTextNode(montoInvertidoLTC)
        
        capitalInvertido.appendChild(capitalInvertidoLTC)

        document.getElementById("capitalInvertidoLitecoin").appendChild(capitalInvertido)

        capitalInvertido.setAttribute("id", "capitalInvertidoFinalLitecoin")
        
        let y = x++
    
        let valor = document.getElementById("texto");
        let texto = document.createTextNode(valor)
        let titulo = document.createElement("p")
        let lista = document.getElementById("listaLtc")
        
        let numero = document.createTextNode(y)
        titulo.appendChild(numero)
        lista.appendChild(titulo)

        
        titulo.appendChild(texto)
        lista.appendChild(titulo)
        
        document.getElementById("form").reset();
       
        }
    
    
    
    
    