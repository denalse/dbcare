import React from 'react';
import '../../style/Profile.css';
import profilepic from '../../assets/profilepic1.png';
import qrcode from '../../assets/qrcode.svg';

export const BuddyProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilepic} alt="Profile" />
      </div>
      <div className="profile-details">
        <div className="qr-code">
          <img src={qrcode} alt="QR Code" />
        </div>
        <h2>Name: Joe James</h2>
        <p>Phone Number: (112) 978-6754</p>
        <p>Age: 35</p>
        <p>Department: Trade Finance</p>
        <p>User Contact: Mark Doe - (987) 654-3210</p>
        <p>Emergency Contact: (768) 656-0743</p>
        <p>Office Desk Number: 17A</p>
      </div>
      
    </div>
  );
};