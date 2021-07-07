const logMessage = require('../logging');

class Device {
    constructor (id, name, channel) {
        this.id = id;
        this.name = name;
        this.channel = channel;
    }
    getId = () => {
        return this.id;
    }
    getName = () => {
        return this.name;
    }
    getChannel = () => {
        return this.channel;
    }
}

module.exports = Device;
