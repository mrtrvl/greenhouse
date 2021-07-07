const db = require('../../db');
const MoistureSensor = require('./MoistureSensor');
const TempSensor = require('./TempSensor');
const logMessage = require('../logging');
const sensors = []
;
const sensorsService = {
    initSensors: async () => {
        await sensorsService.initMoistureSensors();
        await sensorsService.initTempeSensors();
        return sensors;
    },
    initMoistureSensors: async () => {
        const moistureSensorsToInit = db.moistureSensors;
        moistureSensorsToInit.forEach(sensor => {
            sensors.push(new MoistureSensor(sensor.id, sensor.name, sensor.channel, sensor.relayId));
        });
        logMessage('Moisture sensors initiated');
    },
    initTempeSensors: async () => {
        const tempSensorsToInit = db.tempSensors;
        tempSensorsToInit.forEach(sensor => {
            sensors.push(new TempSensor(sensor.id, sensor.name, sensor.channel, sensor.relayId));
        });
        logMessage('Temperature sensors initiated');
    },
    getById: (id) => {
        const sensorsId = parseInt(id);
        const sensor = sensors.find(sensor => sensorsId === sensor.getId());
        if (!sensor) return false;
        return sensor;
    },
    getAll: () => {
        return sensors;
    }
};

module.exports = sensorsService;