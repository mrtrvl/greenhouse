const piCamera = require('pi-camera-connect');
const fs = require('fs');
const path = require('path');

class Camera {
    constructor() {
        this.stillCamera = new piCamera.StillCamera();
        this.imagePath = path.join(__dirname, '../images');
    }

    getImage = async () => {
        const image = await this.stillCamera.takeImage();
        const imageName = `${new Date()}.jpg`;
        fs.writeFileSync(`${this.imagePath}/${imageName}`, image);
        console.log('Image saved');
        return imageName;
    }
}

module.exports = Camera;
