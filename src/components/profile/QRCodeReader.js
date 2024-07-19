import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'

//https://curly-system-pj554rprvj9h79p5-3000.app.github.dev/
const QRCodeReader = () => {
  const [result, setResult] = useState('No result');
  const delay = 100;
  const [isEnabled, setEnabled] = useState(false);

  // this.handleScan = this.handleScan.bind(this)

  const handleScan = (data) => {
    console.log(data);
    setResult(data);
  }

  const handleEnableQRSCan = (isEnabled) => {
    console.log(isEnabled);
    setEnabled(isEnabled);
  }

  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  if (isEnabled) {
    return (
      <div>
        <button color="danger" onClick={() => handleEnableQRSCan(false)} >Scan for QR</button>
        <p>{result}</p>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />        
      </div>
    )
  } else {
    return (
      <button color="primary" onClick={() => handleEnableQRSCan(true)} >Scan for QR</button>
    )
  }
}
export default QRCodeReader;