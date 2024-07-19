import React from 'react';
import '../../style/Profile.css';
import QRCodeReader from './QRCodeReader';
import TakePhoto from './TakePhoto';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GuestProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="row">
        <div className="col-3">
            <TakePhoto/>
        </div>
        <div className="col-3">
            Scan your photo here to search the details <i class="fa-solid fa-camera"/>
        </div>
        <div className="col-6">
            <QRCodeReader/> Scan your QR Code here <i class="fa-solid fa-camera"/>
        </div>
        </div>
        <h2>Hello Guest</h2><br/>
        <p>Thank you for your helping our users finding their way back</p><br/>
        <p>Scan QR Code or Face to find more about user & their emergency contacts</p><br/>
      </div>      
    </div>
  );
};
// export default GuestProfile;