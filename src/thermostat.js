function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.up = function(value) {
  this.temperature += value
  return this.temperature
}