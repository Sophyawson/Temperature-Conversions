//  Fahrenheit to Celsius 

function covertToCelsius( Fahrenheit ) {
    return  (Fahrenheit - 32) * (5/9) ;
}

let temperature = covertToCelsius(59)

console.log( "Temperature in Celsius: " + temperature + "C")