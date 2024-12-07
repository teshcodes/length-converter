
var lengthInput = document.getElementById("length");
var fromUnit = document.getElementById("fromUnit");
var toUnit = document.getElementById("toUnit");
var convertButton = document.getElementById("convertButton");
var resultDiv = document.getElementById("result");

var enableButton = function() { 
    console.log("Input value: " + lengthInput.value); 
    console.log("From unit value: " + fromUnit.value);
    console.log("To unit value: " + toUnit.value); 

    if (lengthInput.value !== '' && fromUnit.value !== '' && toUnit.value !== '') { 
        convertButton.disabled = false; 
        console.log("Convert button enabled."); 
    } else { 
        convertButton.disabled = true; 
        console.log("Convert button disabled.");  
    } 
};

lengthInput.addEventListener("input", enableButton);
fromUnit.addEventListener("change", enableButton);
toUnit.addEventListener("change", enableButton);

var convertLength = function() {
    var length = parseFloat(lengthInput.value);
    var from = fromUnit.value;
    var to = toUnit.value;
    var result;

    console.log("Length entered: " + length); 
    console.log("From unit: " + from); 
    console.log("To unit: " + to);

    if (isNaN(length)) {
        resultDiv.textContent = "Please enter a valid length!";
        resultDiv.style.display = "block";
        console.log("Invalid length entered.");
        return;
    }

    var conversionFactors = {
        meters: { kilometers: 0.001, miles: 0.000621371, feet: 3.28084, inches: 39.3701 },
        kilometers: { meters: 1000, miles: 0.621371, feet: 3280.84, inches: 39370.1 },
        miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, inches: 63360 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, inches: 12 },
        inches: { meters: 0.0254, kilometers: 0.0000254, miles: 0.000015783, feet: 0.0833333 }
    };

    if (from === to) {
        result = length;
    } else {
        result = length * conversionFactors[from][to];
    }

    console.log("Conversion result: " + result);

    var formattedResult = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    resultDiv.textContent = length.toLocaleString() + " " + from.toUpperCase() + " is " + formattedResult + " " + to.toUpperCase(); 
    resultDiv.style.display = "block";

};