/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")


btn.addEventListener("click", function(){
    const inputValue = document.getElementById("input-el").value
    
    const metertoFeet = inputValue * 3.281
    const feettoMeter = inputValue / 3.281
    const litertoGallon = inputValue * 0.264
    const gallontoLiter = inputValue / 0.264
    const kilotoPound = inputValue * 2.204
    const poundtoKilo = inputValue / 2.204
    
    console.log(inputValue)
    lengthResult.textContent =  `${inputValue} meters = ${metertoFeet.toFixed(3)} feet | ${inputValue} feet = ${feettoMeter.toFixed(3)} meters`
    volumeResult.textContent =  `${inputValue} liters = ${litertoGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallontoLiter.toFixed(3)} liters`
    massResult.textContent = `${inputValue} kilos = ${kilotoPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundtoKilo.toFixed(3)} kilos`
})