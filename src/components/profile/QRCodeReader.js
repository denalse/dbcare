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
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p>{result}</p>
        <button onClick={()=>handleEnableQRSCan(false)} />
      </div>
    )
  } else {
    return (
      <button onClick={()=>handleEnableQRSCan(true)} />
    )
  }
}
export default QRCodeReader;