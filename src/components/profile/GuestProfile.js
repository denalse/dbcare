import React from 'react';
import '../../style/Profile.css';
import QRCodeReader from './QRCodeReader';
import TakePhoto from './TakePhoto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GuestProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div >
            <TakePhoto/> Scan your photo here to search the details <i class="fa-solid fa-camera"></i>
        </div>
        <div >
            <QRCodeReader/> Scan your QR Code here <FontAwesomeIcon icon="fa-solid fa-qrcode" /> 
        </div>
        <h2>Hello Guest</h2><br/>
        <p>Thank you for your helping our users finding their way back</p><br/>
        <p>Scan QR Code or Face to find more about user & their emergency contacts</p><br/>
      </div>      
    </div>
  );
};
// export default GuestProfile;