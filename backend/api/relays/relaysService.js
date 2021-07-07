const db = require('../../db');
const Relay = require('./Relay');
const logMessage = require('../logging');

const relays = [];

const relaysService = {
    initRelays: async () => {
        const relaysToInit = db.relays;
        relaysToInit.forEach(relay => {
            relays.push(new Relay(relay.id, relay.name, relay.channel, relay.gpio));
        });
        logMessage('Relays initiated');
    },
    getById: (id) => {
        const relaysId = parseInt(id);
        const relay = relays.find(relay => relaysId === relay.getId());
        if (!relay) return false;
        return relay;
    },
    getAll: () => {
        return relays;
    }
}

module.exports = relaysService;