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

})
