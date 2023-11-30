import React from 'react';
import './FaceRecognition.css'

function FaceRecognition({set_img_url, box}) {
  return (
    <div className="center ma">
    <div className="absolute mt2">
      <img id='input_image' src={set_img_url} alt="" width="500px" height="auto" />

      <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition