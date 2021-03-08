
let email = ["felipe.arancibia.r@gmail.com"]
let password = ["123"] 

$("#loginPrincipal").click(function() {

    $("#email").val()
    console.log("email")
    $("#password").val()
    console.log("password")

    if (email == "felipe.arancibia.r@gmail.com" && password == "123") {
        console.log("Inicio de sesion correcta")
        $("#loginPage").hide()
        $("#prueba").show()

    } else if (email != "felipe.arancibia.r@gmail.com" && password == "123") { 
        console.log("Usuario o contraseña incorrecto")
        alert("Usuario incorrecto")
        password.value = ""
    }
})

/*  */

/*         let textoPrincipal = document.getElementById("textoPrincipal")
        document.getElementById("imgPrincipal").removeChild(textoPrincipal)  
    
    // crear nodo
        async function crearNodosLtc (){
    
        let calculoLtc = await capturarDatosLtc() //espera a la funcion de forma asincrona
    
        let textoFinal = document.createElement("div") 
    
        textoFinal.setAttribute("class", "btn btn-primary")
    
        let textoFinalCalculo = document.createTextNode("Tu cantidad de Litecoin " + calculoLtc)
    
        textoFinal.appendChild(textoFinalCalculo)
    
        document.getElementById("resultadoFinalLtc").appendChild(textoFinal)
    
        textoFinal.setAttribute("id", "txtFinalCalculo")
    
        localStorage.setItem('inversion',calculoLtc)
        
    }   */
