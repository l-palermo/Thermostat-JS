'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  })

  it('starts with a termperature or 20', function() {
    expect(thermostat.temperature).toEqual(20)
  })

  describe('up', function() {
    it('raise the temperature by 1', function() {
      for (var i = 0; i < 5; i++) { 
        thermostat.up();
       }
      expect(thermostat.temperature).toEqual(25)
    })
  })

  describe('down', function() {
    it('lower the temperature by a desired value', function() {
      for (var i = 0; i < 5; i++) { 
        thermostat.down()
      }
      expect(thermostat.temperature).toEqual(15)
    })
  })

  describe('power saving', function() {
    it('returns true when active', function() {
      thermostat.powerSavingOff()
      thermostat.powerSavingOn()
      expect(thermostat._powerSaving).toEqual(true)
    })
    it('returns false when not active', function() {
      thermostat.powerSavingOff()
      expect(thermostat._powerSaving).toEqual(false)
    })
    it('is on by default', function() {
      expect(thermostat._powerSaving).toEqual(true)
    })
  })

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
       }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.powerSavingOn();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
       }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('reset', function() {
    it('reset the temperature to 20', function() {
      thermostat.up(5)
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('energy usage', function() {
    it('return low-usage if temp < 18, medium-usage if temp < 25, high-usage if > 25', function() {
      for( var i = 0; i < 3; i++) {
        thermostat.down()
      }
      expect(thermostat.energyUsage()).toEqual('low-usage')
  
      for(var i = 0; i < 5; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage')
  
      thermostat.powerSavingOff()
      for(var i = 0; i < 5; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })

})