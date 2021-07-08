
const sensor = require('ds18b20-raspi');
const logMessage = require('../logging');
const Device = require('../general/Device');

class TempSensor extends Device {
    constructor(id, name, channel, relayId) {
        super(id, name, channel)
        this.relayId = relayId || false;
    }
    getChannel = () => {
        return this.channel;
    }
    getRelayId = () => {
        return this.relayId;
    }
    getValue = async () => {
        const temp = await sensor.readC(this.channel);
        logMessage(`Sensors ${ this.name } value is ${ temp }`);
        return temp;
    }
}

module.exports = TempSensor;