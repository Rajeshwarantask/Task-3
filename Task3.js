document.getElementById('convertBtn').addEventListener('click', function() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;

  if (isNaN(temperature)) {
    document.getElementById('result').textContent = 'Please enter a valid temperature.';
    return;
  }

  let convertedTemperature;

  if (inputUnit === 'celsius') {
    if (outputUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9/5) + 32;
    } else {
      convertedTemperature = temperature + 273.15;
    }
  } else if (inputUnit === 'fahrenheit') {
    if (outputUnit === 'celsius') {
      convertedTemperature = (temperature - 32) * 5/9;
    } else {
      convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
    }
  }

  document.getElementById('result').textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${outputUnit}`;
});
