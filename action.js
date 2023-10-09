let celsiusInput = document.querySelector('#cel')
let fahrenheitInput = document.querySelector('#fah')
let kelvinInput = document.querySelector('#kel')

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = (cTemp)+273.5

    fahrenheitInput.value = fTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
 
 })

 fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9)+273.5

    celsiusInput.value =cTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
 
 })

 kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = (kTemp - 273.5)
    let fTemp = (kTemp - 273.1)*9/5 + 32

    celsiusInput.value =cTemp.toFixed(2);
    fahrenheitInput.value = fTemp.toFixed(2);
 })   


