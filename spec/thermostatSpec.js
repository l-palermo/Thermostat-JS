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
    it('raise an error if temperature goes over 25 and pS is on', function() {
      expect(function() { thermostat.up(10) } ).toThrow( Error('Temperature Limit'))
    })
    it('raise an error if temperature goes over 32 and pS is off', function() {
      thermostat.powerSaving()
      expect(function() { thermostat.up(13) } ).toThrow( Error('Temperature Limit'))
    })
  })

  describe('down', function() {
    it('lower the temperature by a desired value', function() {
      thermostat.down(5)
      expect(thermostat.temperature).toEqual(15)
    })
    it('raise an error if the temperature goes lower than 10', function() {
      expect(function() { thermostat.down(11) }).toThrow( Error('Temperature Limit'))
    })
  })

  describe('power saving', function() {
    it('returns true when active', function() {
      expect(thermostat.powerSaving()).toEqual('OFF')
    })
    it('returns false when not active', function() {
      thermostat.powerSaving()
      expect(thermostat.powerSaving()).toEqual('ON')
    })
    it('is on by default', function() {
      expect(thermostat._powerSaving).toEqual('ON')
    })
  })

  describe('reset', function() {
    it('reset the temperature to 20', function() {
      thermostat.up(5)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('energy usage', function() {
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

})