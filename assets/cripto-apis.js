 /* Ethereum */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://www.buda.com/api/v2/markets/eth-clp/ticker",
    dataType: "json",
    }).done(function(resultado){
        $("#EthereumApi").text("ETH: $" + resultado.ticker.last_price)
    }).fail(function(xhr){
        console.log(xhr)
    })
})

/* BITCOIN */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://www.buda.com/api/v2/markets/btc-clp/ticker",
    dataType: "json",
    }).done(function(resultado){
        console.log("Precio Btc: " + resultado.ticker.last_price)
        $("#btcApi").text("BTC: $" + resultado.ticker.last_price)
    }).fail(function(xhr){
        console.log(xhr)
    })
})

/* BITCOIN CASH */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://www.buda.com/api/v2/markets/bch-clp/ticker",
    dataType: "json",
    }).done(function(resultado){
        console.log("Precio Bch: " + resultado.ticker.last_price)
        $("#bchApi").text("BCH: $" + resultado.ticker.last_price)
    }).fail(function(xhr){
        console.log(xhr)
    })
}) 

/* Litecoin */
/* $(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://www.buda.com/api/v2/markets/ltc-clp/ticker",
    dataType: "json",
    }).done(function(resultado){
        console.log("Precio Bch: " + resultado.ticker.last_price)
        $("#ltcApi").text("LTC: $" + resultado.ticker.last_price)
    }).fail(function(xhr){
        console.log(xhr)
    })
})  */
/* 
PARA LLAMAR CON UN BOTÓN
$("#buscar").click(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://www.buda.com/api/v2/markets/eth-clp/ticker",
    dataType: "json",
    }).done(function(resultado){
        console.log("Precio Eth: " + resultado.ticker.last_price)
    }).fail(function(xhr){
        console.log(xhr)
    })
}) */