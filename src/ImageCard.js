import React from 'react';
import './App.css'; 

function ImageCard(props) {
  // Check if the image source is valid and if it is not provide a template image
  const hasImage = props.imageSrc && props.imageSrc.startsWith ('http');

  return (
    <div className="image-card">
      {hasImage ? (
        <img src={props.imageSrc} alt={props.title} className="image" onError={(e) => e.target.src = 'https://via.placeholder.com/300'} />
      ) : (
        <img src='https://via.placeholder.com/400' alt=" a Placeholder" className="image" />
      )}
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;