const logMessage = (message) => {
    const timestamp = new Date();
    console.log(`Message: ${message}, time: ${timestamp}`);
}

module.exports = logMessage;