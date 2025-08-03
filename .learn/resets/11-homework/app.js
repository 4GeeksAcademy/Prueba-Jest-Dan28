const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
  
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInYen / 156.5) * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};