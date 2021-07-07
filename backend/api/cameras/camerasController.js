const path = require('path');
const camerasService = require('./camerasService');

const camerasController = {
    getImage: async (req, res) => {
        const imageName = await camerasService.getImage();
        if (imageName) {
            const imagePath = path.join(__dirname, `../images/${imageName}`); 
            return res.sendFile(imagePath);
        } else {
            return res.status(500).json({
                error: 'Something happende while taking image'
            });
        }
    }
};

module.exports = camerasController;