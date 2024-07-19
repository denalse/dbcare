import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  return (
    <div>
      <QRCode value={window.location.href} />
    </div>
  );
};

export default QRCodeGenerator;
