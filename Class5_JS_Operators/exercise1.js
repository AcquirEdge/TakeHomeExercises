function fahrenheitToCelsiusAndKelvin(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let kelvin = celsius + 273.15;
  console.log("Celcius temp:", celsius);
  console.log("Kelvin temp:", kelvin);
}

fahrenheitToCelsiusAndKelvin(32);  // Outputs: 0 and 273.15