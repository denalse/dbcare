import React from 'react';
import '../../style/Profile.css';
import QRCodeReader from './QRCodeReader';
import TakePhoto from './TakePhoto';

export const GuestProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div >
            Scan your photo here to search the details - <TakePhoto/>
        </div>
        <div >
            Scan your QR Code here - <QRCodeReader/>
        </div>
        <h2>Hello Guest</h2><br/>
        <p>Thank you for your help our users finding their way back</p><br/>
        <p>Scan QR Code or Face to find more about user & Their Emergency Contacts</p><br/>
      </div>      
    </div>
  );
};
// export default GuestProfile;