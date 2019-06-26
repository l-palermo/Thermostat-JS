function Thermostat() {
  this.temperature = 20
  this._powerSaving = 'ON'
}

Thermostat.prototype.up = function(value) {
  this.temperature += value
  if(this._powerSaving == 'OFF' && this.temperature > 32) {
    throw Error('Temperature Limit') 
  } else if(this._powerSaving == 'ON' && this.temperature > 25) { 
    throw Error('Temperature Limit') }
  return this.temperature
}

Thermostat.prototype.down = function(value) {
  this.temperature -= value
  if(this.temperature < 10) { throw Error('Temperature Limit') }
  return this.temperature 
} 

Thermostat.prototype.powerSaving = function() {
  if(this._powerSaving == 'OFF') { return this._powerSaving = 'ON' }
  else if(this._powerSaving == 'ON') { return this._powerSaving = 'OFF' }
}

Thermostat.prototype.reset = function() {
  return this.temperature = 20
}

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) { return 'low-usage' }
  else if(this.temperature < 25) { return 'medium-usage' }
  else if(this.temperature > 25) { return 'high-usage' }
}