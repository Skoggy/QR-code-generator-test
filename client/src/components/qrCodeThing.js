import { React, useState } from 'react'
import QRCode from 'react-qr-code';
import { useQuery } from 'react-query';
import axios from 'axios'

function QRCodeThing() {

    const { isLoading, error, data } = useQuery('search', () =>
        axios.get('http://localhost:3001/api/stocks'))


    const [input, setInput] = useState('')
    const [qrCode, setQrCode] = useState('');


    const onInputChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const dynamicQRCode = (e, name) => {
        e.preventDefault();
        setQrCode(name)
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
                {isLoading ? <p>QR code loading</p> : data.data.map(stock => <button onClick={(e) => dynamicQRCode(e, stock.name)}>{stock.name}</button>)}
                {console.log(qrCode)}
                <button type="submit">
                    Generate Qr Code
                </button>
            </form>
            {isLoading ? <p>QR Code Loading</p> : <QRCode value={qrCode} />}

        </>
    );
}

export default QRCodeThing;
