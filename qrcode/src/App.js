import { React, useState } from 'react'
import QRCode from 'react-qr-code';


function App() {

  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('');


  const onInputChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQrCode(JSON.stringify(input))
        }}>
        <input
          type="text"
          placeholder="Input QR code"
          name="qrcode"
          onChange={onInputChange}
          value={input}
        />

        <button type="submit">
          Generate Qr Code
                </button>
      </form>
      <QRCode value={qrCode} />
    </>
  );
}

export default App;
