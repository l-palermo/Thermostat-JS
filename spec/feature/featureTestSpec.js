describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  })

// Thermostat starts at 20 degrees

  it('starts with a termperature or 20', function() {
    expect(thermostat.temperature).toEqual(20)
  })

  // You can increase the temperature with an up function

  it('raise the temperature by a desired valiue', function() {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })

   // You can decrease the temperature with a down function

   it('lower the temperature by a desired value', function() {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })

  // The minimum temperature is 10 degrees

  it('The minimum temperature is 10 degrees', function() {
    for (i = 1; i < 11; i++) { 
      thermostat.down();
     }
    expect(thermostat.temperature).toEqual(10)
  })

  // If power saving mode is on, the maximum temperature is 25 degrees

  it('the maximum temperature is 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  // If power saving mode is off, the maximum temperature is 32 degrees

  it('power saving mode is off, the maximum temperature is 32 degrees', function() {
    thermostat.powerSavingOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
     }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  // Power saving mode is on by default
  
  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  // You can reset the temperature to 20 with a reset function

  it('reset the temperature to 20', function() {
    thermostat.up()
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  // You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

  it('return low-usage if temp < 18, medium-usage if temp < 25, high-usage if > 25', function() {
    for( i = 0; i < 3; i++) {
      thermostat.down()
    }
    expect(thermostat.energyUsage()).toEqual('low-usage')

    for( i = 0; i < 5; i++) {
      thermostat.up()
    }
    expect(thermostat.energyUsage()).toEqual('medium-usage')

    thermostat.powerSavingOff()
    for( i = 0; i < 5; i++) {
      thermostat.up()
    }
    expect(thermostat.energyUsage()).toEqual('high-usage')
  })
})
