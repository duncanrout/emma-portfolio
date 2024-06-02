import React from 'react';
import './styles.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div key={index} className="image-container">
          <img src={src} alt={`img-${index}`} className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
