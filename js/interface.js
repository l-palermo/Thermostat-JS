$( document ).ready(function() {
  var thermostat = new Thermostat();
  
  updateTemperature();

  $('#temp_down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp_up').click(function() {
      thermostat.up();
      updateTemperature();
  });
  $('#psm_on').click(function() {
    thermostat.powerSavingOn()
    $('#power-saving').text('on')
    updateTemperature();
  });
  $('#psm_off').click(function() {
    thermostat.powerSavingOff()
    $('#power-saving').text('off')
    updateTemperature();
  });
  $('#reset').click(function() {
    thermostat.reset()
    updateTemperature();
  });

  $('#current_city').change(function() {
    var city = $('#current_city').val();
    cityWeather(city)
  });

  function cityWeather(city) {
    var URL = "http://api.openweathermap.org/data/2.5/weather?q="
    var token = "uk&appid=2db88ea2cb9a42dea897cb8697d67f0f"
    var units = "&units=metric"
    city = "london"
  $.get(URL + city + token + units, function(data) {
    $('#ext_temp').text(data.main.temp);
    $('#city').text(data.name);
    })
  }

  function updateTemperature() { 
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class',thermostat.energyUsage())
  }
})