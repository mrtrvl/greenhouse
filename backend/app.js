const express = require('express');
const app = express();
const cron = require('node-cron');
const cors = require('cors');

const logMessage = require('./api/logging');
const sensorsService = require('./api/sensors/sensorsService');
const relaysService = require('./api/relays/relaysService');
const sensorsRouter = require('./api/sensors/sensorsRouter');
const relaysRouter = require('./api/relays/relaysRouter');
const camerasService = require('./api/cameras/camerasService');
const camerasRouter = require('./api/cameras/camerasRouter');

const PORT = 3200;
let sensors = [];

app.use(cors());
app.use('/sensors', sensorsRouter);
app.use('/relays', relaysRouter);
app.use('/cameras', camerasRouter);

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'App is running'
	});
});

app.listen(PORT, async () => {
	logMessage('App is running');
	sensors = await sensorsService.initSensors();
	await relaysService.initRelays();
	await camerasService.initCamera();
});

cron.schedule('* * * * *', async () => {
	console.log('Minute passed');
	await processSensors();
});

const processSensors = async () => {
	sensors.forEach(async sensor => {
		const result = await sensor.getValue();
		const relay = relaysService.getById(sensor.getRelayId());
		if (!relay) {
			logMessage(`Relay associated with sensor ${ sensor.getName() } not found!`);
		} else if (result < 500) {
			relay.turnOff();
		} else {
			relay.turnOn();
		}
	});
};


