const relaysService = require('./relaysService');

const relaysController = {
    getById: async (req, res) => {
        const { id } = req.params;
        const { state } = req.query;
        const relay = relaysService.getById(id);
        if (!relay) {
            return res.status(404).json({
                error: true,
                message: `No relay found with id ${ id }`
            });
        }
        if (state === 'on') {
            relay.turnOn();
        } else {
            relay.turnOff();
        }
        return res.status(200).json({
            relay: relay.getName(),
            message: `Relay ${ relay.getName() } state updated to ${ state === 'on' ? 'on' : 'off' }`
        });
    },
    readState: async (req, res) => {
        const { id } = req.params;
        const relay = findRelayById(id);
        if (!relay) {
            return res.status(404).json({
                error: true,
                message: `No relay found with id ${ id }`
            });
        }
        const state = await relay.getState();
        return res.status(200).json({
            relay: relay.getName(),
            message: `Relay ${ relay.name } state state is ${ state }`
        });
    },
    getAll: async (req, res) => {
        const relays = relaysService.getAll();
        return res.status(200).json({
            relays
        });
    }
};

module.exports = relaysController;