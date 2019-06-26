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
    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25)
  })

   // You can decrease the temperature with a down function

   it('lower the temperature by a desired value', function() {
    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15)
  })

  // The minimum temperature is 10 degrees

  it('raise an error if the temperature goes lower than 10', function() {
    expect(function() { thermostat.down(11) }).toThrow( Error('Temperature Limit'))
  })

  // If power saving mode is on, the maximum temperature is 25 degrees

  it('raise an error if temperature goes over 25 and pS is on', function() {
    expect(function() { thermostat.up(10) } ).toThrow( Error('Temperature Limit'))
  })

  // If power saving mode is off, the maximum temperature is 32 degrees

  it('raise an error if temperature goes over 32 and pS is off', function() {
    thermostat.powerSaving()
    expect(function() { thermostat.up(13) } ).toThrow( Error('Temperature Limit'))
  })

  // Power saving mode is on by default
  
  it('is on by default', function() {
    expect(thermostat._powerSaving).toEqual('ON')
  })

  // You can reset the temperature to 20 with a reset function

  it('reset the temperature to 20', function() {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  // You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

  it('return low-usage if temp < 18, medium-usage if temp < 25, high-usage if > 25', function() {
    thermostat.down(3)
    expect(thermostat.energyUsage()).toEqual('low-usage')

    thermostat.up(4)
    expect(thermostat.energyUsage()).toEqual('medium-usage')

    thermostat.powerSaving()
    thermostat.up(5)
    expect(thermostat.energyUsage()).toEqual('high-usage')
  })

})
