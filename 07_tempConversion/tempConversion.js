const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit-32)*5.0/9;
  celsius = Math.round(celsius * 10)/10.0;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 9.0*celsius/5.0 + 32;
  fahrenheit = Math.round(fahrenheit*10)/10.0;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
