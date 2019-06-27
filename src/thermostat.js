'use strict';

function Thermostat() {
  this.temperature = 20;
  this._powerSaving = true;
  this.MINIMUM_TEMPERATURE;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature ++;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature --;
} 

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSaving === true;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.powerSavingOn = function() {
  this._powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = false;
}

Thermostat.prototype.reset = function() {
  return this.temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) { return 'low-usage' }
  else if(this.temperature < 25) { return 'medium-usage' }
  else if(this.temperature > 25) { return 'high-usage' }
}