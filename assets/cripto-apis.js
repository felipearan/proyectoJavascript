 /* Ethereum */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/ethereum/tickers", 
    headers: {
		"x-rapidapi-key": "a08246e063msh2448d612a810623p19790fjsn2360e20f9dc6",
		"x-rapidapi-host": "coingecko.p.rapidapi.com"
	},
    dataType: "json",
    }).done(function(resultado){
        $("#EthereumApi").text("ETH (USD): $" + resultado.tickers[0].converted_last.usd)
    }).fail(function(xhr){
        console.log(xhr)
    })
})

/* BITCOIN */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/bitcoin/tickers", 
    headers: {
		"x-rapidapi-key": "a08246e063msh2448d612a810623p19790fjsn2360e20f9dc6",
		"x-rapidapi-host": "coingecko.p.rapidapi.com"
	},
    dataType: "json",
    }).done(function(resultado){
        $("#btcApi").text("BTC (USD): $" + resultado.tickers[0].converted_last.usd)
    }).fail(function(xhr){
        $("#btcApi").text("Error llamada")
    })
})

/* Litecoin */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/bitcoin/tickers", 
    headers: {
		"x-rapidapi-key": "a08246e063msh2448d612a810623p19790fjsn2360e20f9dc6",
		"x-rapidapi-host": "coingecko.p.rapidapi.com"
	},
    dataType: "json",
    }).done(function(resultado){
        $("#ltcApi").text("LTC (USD): $" + resultado.tickers[0].converted_last.usd)
    }).fail(function(xhr){
        console.log(xhr)
    })
})  

/* Valor UF */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://mindicador.cl/api/uf", 
    dataType: "json",
    }).done(function(resultado){
        $("#valorUF").text("Valor UF (CLP): $" + resultado.serie[0].valor) 
    }).fail(function(xhr){
        console.log(xhr)
    })
}) 

/* Valor Dolar */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://mindicador.cl/api/dolar", 
    dataType: "json",
    }).done(function(resultado){
        $("#valorDolar").text("Valor Dolar (CLP): $" + resultado.serie[0].valor);
    }).fail(function(xhr){
        console.log(xhr)
    }); 
}) 

/* Gas Eth (Fast) */
$(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "https://ethgasstation.info/api/ethgasAPI.json?api-key=XXXf68abe3cd9e7790f10d9e5b8737a89b072a91298f6f573798402313fc2f0", 
    dataType: "json",
    }).done(function(resultado){
        $("#fastEth").text("Fast (Inmediata): GWEI " + (resultado.fast / 10)) 
        $("#fastestEth").text("Fastest (Inmediata): GWEI " + (resultado.fastest / 10)) 
        $("#safeslowEth").text("Safe Slow: GWEI " + (resultado.safeLow / 10)) 
        $("#averageEth").text("Average: GWEI " + (resultado.average / 10)) 
    }).fail(function(xhr){
        console.log(xhr)
    }) 
}) 



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