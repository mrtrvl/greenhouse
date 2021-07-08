const db = {
    moistureSensors: [
        {
                id: 1,
                name: 'First',
                channel: 0,
                relayId: 1
        },
        {
                id: 2,
                name: 'Second',
                channel: 1,
                relayId: 2
        },
    ],
    tempSensors: [
        {
            id: 3,
            name: 'Veranda',
            channel: '28-01202347b499',
            relayId: null
        },
    ],
    pirSensors: [
        {
            id: 4,
            name: 'Veranda liikumisandur',
            channel: 14,
            relayId: null
        },
    ],
    relays: [
        {
            id: 1,
            name: 'First',
            channel: 0,
            gpio: 17
        },
        {
            id: 2,
            name: 'Second',
            channel: 1,
            gpio: 27
        }
    ]
};

module.exports = db;
