const Camera = require('./Camera');
let camera = null;

const camerasService = {
    initCamera: async () => {
        camera = await new Camera();
        console.log('Camera initiated');
    },
    getImage: async () => {
        try {
            const image = await camera.getImage();
            return image;
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }
}

module.exports = camerasService;