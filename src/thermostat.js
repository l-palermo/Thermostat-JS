function Thermostat() {
  this.temperature = 20
  this._powerSaving = false
}

Thermostat.prototype.up = function(value) {
  this.temperature += value
  if(this._powerSaving == true && this.temperature > 25) {
    throw Error('Temperature Limit') 
  }
  return this.temperature
}

Thermostat.prototype.down = function(value) {
  this.temperature -= value
  if(this.temperature < 10) { throw Error('Temperature Limit') }
  return this.temperature 
} 

Thermostat.prototype.powerSaving = function() {
  if(this._powerSaving == false) { return this._powerSaving = true }
  else if(this._powerSaving == true) { return this._powerSaving = false }
}