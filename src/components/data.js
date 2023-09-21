const imageCount = 92; // Change this to the total number of images you have

// Define your custom tags for each image in an array
const customTags = [
    'Disgusted', 'What?', 'Shocked', 'Seriously', 'Shocked', 'Seriously', 'Disgusted', 'Confused', 'Seriously', 'Cruise', 'Shocked', 'Crying', 'Cruise', 'What?', 'Laughing', 'Laughing', 'Thinking', 'Disgusted', 'Laughing', 'Shocked', 'Shocked', 'What?', 'Crying', 'Crying', 'Cruise', 'Confused', 'Seriously', 'Cruise', 'Disgusted', 'Cruise', 'Disgusted', 'Seriously', 'Cruise', 'What?', 'Shocked', 'Thinking', 'Cruise', 'Cruise', 'Cruise', 'Cruise', 'Seriously', 'Disgusted', 'Cruise', 'Disgusted', 'Shocked', 'Laughing', 'Shocked', 'Disgusted', 'Disgusted', 'Disgusted', 'Laughing', 'Shocked', 'Shocked', 'Crying', 'Crying', 'Laughing', 'Disgusted', 'Cruise', 'Cruise', 'What?', 'Disgusted', 'Cruise', 'Crying', 'What?', 'Crying', 'Disgusted', 'Crying', 'Cruise', 'Shocked', 'Cruise', 'Confused', 'Shocked', 'Cruise', 'Laughter', 'Seriously?', 'Shocked', 'Cruise', 'Cruise', 'Laughter', 'What?', 'Cruise', 'What?', 'Shocked', 'Seriously?', 'Disgusted', 'Cruise', 'Seriously?', 'Seriously?', 'Seriously?', 'Seriously?', 'Crying', 'Cruise',
];

const generateImagePaths = () => {
    const imagePaths = [];

    for (let i = 1; i <= imageCount; i++) {
        const imagePath = `/assets/image${i}.jpg`; // Adjust the path as needed
        const imageTags = [customTags[i - 1]]; // Use the custom tag for this image
        imagePaths.push({ path: imagePath, tags: imageTags });
    }

    return imagePaths;
};

const imagePaths = generateImagePaths();

const galleryData = imagePaths.map((image, index) => ({
    id: index + 1,
    title: `Image ${index + 1}`,
    img: image.path, // Use the generated image path
    tags: image.tags, // Use the custom tag for each image
}));

export default galleryData;
