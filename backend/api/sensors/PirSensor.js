const Device = require('../general/Device');
const Gpio = require('onoff').Gpio;
const logMessage = require('../logging');
const camerasService = require('../cameras/camerasService');

class PirSensor extends Device {
    constructor(id, name, channel, relayId) {
        super(id, name, channel)
        this.gpioPin = channel;
        this.pir = new Gpio(this.gpioPin, 'in', 'both');
        this.relayId = relayId || false;
        this.initPir();
    }
    initPir = async () => {
        console.log(`Initiating Pir sensor ${this.name}`);
        this.pir.watch(async (err, value) => {
            if (err) {
                console.log(`Pir ${this.name} error occured: ${err}`);
            } else {
                const image = await camerasService.getImage();
                console.log(`Pir ${this.name} state changed, new state: ${value}`);
                console.log(`Saved image: ${image}`);
            }
        });
    }
    getChannel = () => {
        return this.gpioPin;
    }
    getRelayId = () => {
        return this.relayId;
    }
    getValue = async () => {
        const stateValue = await this.pir.read();
        const state = stateValue === 0 ? 'on' : 'off';
        logMessage(`Pir ${this.name} state is ${state}`);
        return state;
    }
}

module.exports = PirSensor;