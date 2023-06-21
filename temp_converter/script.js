function convertToFahrenheit() {
    var input = document.getElementById('inputTemperature').value;
    var result = (input * 9/5) + 32;
    document.getElementById('result').innerHTML = input + "°C is " + result + "°F";
  }
  
  function convertToCelsius() {
    var input = document.getElementById('inputTemperature').value;
    var result = (input - 32) * 5/9;
    document.getElementById('result').innerHTML = input + "°F is " + result + "°C";
  }