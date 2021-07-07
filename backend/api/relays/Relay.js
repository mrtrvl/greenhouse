const Device = require('../general/Device');
const Gpio = require('onoff').Gpio;
const logMessage = require('../logging');

class Relay extends Device {
    constructor(id, name, channel, gpioPin) {
        super(id, name, channel);
        this.gpioPin = gpioPin;
        this.gpio = new Gpio(this.gpioPin, 'out');
        this.turnOff();
    }
    getGpioPin = () => {
        return this.gpioPin;
    }
    turnOn = async () => {
        await this.gpio.writeSync(0);
        logMessage(`Relay: ${ this.name } turned on`);
    }
    turnOff = async () => {
        await this.gpio.writeSync(1);
        logMessage(`Relay: ${ this.name } turned off`);
    }
    getState = async () => {
        const stateValue = await this.gpio.read();
        const state = stateValue === 0 ? 'on' : 'off';
        logMessage(`Relay ${this.name} state is ${state}`);
        return state;
    }
}

module.exports = Relay;