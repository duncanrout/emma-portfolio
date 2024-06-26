import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectImages.css'; // Import the CSS file

const ProjectImages = () => {
    // Get the 'path' parameter from the URL using useParams
    const { path } = useParams();

    // Object to map paths to image counts
    const imageCounts = {
        Acrylic: 4,
        Ceramic: 9,
        Digital: 3,
        Maya: 3,
        Printmaking: 2,
        Sculpture: 5,
        Watercolor: 3,
        ZBrush: 6,
    };

    // Determine the number of images based on the path parameter
    const numberOfImages = imageCounts[path] || 0;

    // Generate an array of image paths based on the known naming convention
    const images = Array.from({ length: numberOfImages }, (_, index) => `/assets/${path}/image${index + 1}.jpg`);

    // Function to generate a random size between 18 and 25 rem
    const getRandomSize = () => `${Math.floor(Math.random() * (25 - 18 + 1)) + 12}rem`;

    return (
        <>
        <h1>{path}</h1>
        <div className="image-gallery">
            
            {/* Map through the images array and render each image */}
            {images.map((image, index) => {
                const size = getRandomSize();
                return (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        style={{ width: size, height: size }}
                    />
                );
            })}
        </div>
        </>
    );
};

export default ProjectImages;
