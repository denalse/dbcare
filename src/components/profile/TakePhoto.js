import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const TakePhoto = () => {
  const [isTakePhotoEnabled, setTakePhoto] = useState(false);

  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
    setTakePhoto(false);
  }

  if (isTakePhotoEnabled) {
    return (
      <Camera
        onTakePhoto={
          (dataUri) => {
            handleTakePhoto(dataUri);            
          }}
      />
    );
  } else {
    return (<button onClick={() => setTakePhoto(true)} />);
  }
}
export default TakePhoto;