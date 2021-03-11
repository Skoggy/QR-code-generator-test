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
                {console.log(data.data[0].name)}
                <button type="submit">
                    Generate Qr Code
                </button>
            </form>
            <QRCode value={data.data[0].name} />
        </>
    );
}

export default QRCodeThing;
