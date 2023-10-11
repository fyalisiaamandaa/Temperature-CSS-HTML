function convertTemperature1() {
    const celsiusInput = document.getElementById("celsius").value;
    const resultElement = document.getElementById("result");
    const result1 = document.getElementById("Fahrenheit");
    

    const fahrenheit = `${(celsiusInput * 9) / 5 + 32}`;
    result1.value = `${fahrenheit}`;
    // Display the result
    resultElement.innerHTML = `(${celsiusInput}°C * 9 / 5 ) + 32 = ${fahrenheit} °F`;
    
}

function convertTemperature2() {
    const fahrInput = document.getElementById("Fahrenheit").value;
    const resultElement2 = document.getElementById("result");
    const result2 = document.getElementById("celsius");

    
    const celc = `${(fahrInput - 32) * 5 / 9}`;
    result2.value = `${celc}`;
    // Display the result
    resultElement2.innerHTML = `(${fahrInput}°F - 32) * 5 / 9 = ${celc} °C`;
    
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("Fahrenheit").value = "";
    document.getElementById("result").innerHTML = "";
}