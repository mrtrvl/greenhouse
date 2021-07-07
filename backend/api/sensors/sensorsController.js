const sensorsService = require('./sensorsService');
const relaysService = require('../relays/relaysService');

const sensorsController = {
    getById: async (req, res) => {
        const { id } = req.params;
        const sensor = sensorsService.getById(id);
        if (!sensor) {
            return res.status(404).json({
                error: true,
                message: `No sensor found with id ${ id }`
            });
        }
        const relay = relaysService.getById(sensor.getRelayId());
        let relayState = null;
        if (relay) {
            relayState = await relay.getState();
        }
        const result = await sensor.getValue();
        return res.status(200).json({
            sensor: sensor.getName(),
            result,
            relayState
        });
    },
    getAll: async (req, res) => {
        const sensors = sensorsService.getAll();
        return res.status(200).json({
            sensors
        });
    }
};

module.exports = sensorsController;