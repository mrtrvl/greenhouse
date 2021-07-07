const mcp = require('mcp-3xxx');
const logMessage = require('../logging');
const Device = require('../general/Device');

class MoistureSensor extends Device {
    constructor(id, name, channel, relayId) {
        super(id, name, channel)
        this.relayId = relayId || false;
    }

    getRelayId = () => {
        return this.relayId;
    }
    getValue = async () => {
        const { read, close } = await mcp.connect('3008', this.channel);
        const result = await read();
        logMessage(`Sensors ${ this.name } value is ${ result }`);
        return result;
    }
}

module.exports = MoistureSensor;