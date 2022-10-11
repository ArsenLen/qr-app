import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './qrcode.css';

const getLastQRcode = () => {
    return axios.get("http://localhost:5000/api/qrcodes/last")
} 

const QRCode = () => {
    const [qrcode, setQrcode] = useState({})
    useEffect(() => {
        getLastQRcode().then(res => setQrcode(res.data[0]))
    }, [])
    return (
        <div>
          <h1 className='checkin-title'>Наведите камеру на QRCode</h1>
          <div className="qrcode-wrapper">
            <img src={`http://localhost:5000/images/${qrcode.img}.png`} alt="" />
          </div>
        </div>
    );
};

export default QRCode;