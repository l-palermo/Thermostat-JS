describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  })

  it('starts with a termperature or 20', function() {
    expect(thermostat.temperature).toEqual(20)
  })

  describe('up', function() {
    it('raise the temperature by a desired valiue', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25)
    })
  })

  describe('down', function() {
    it('lower the temperature by a desired value', function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15)
    })
  })
})