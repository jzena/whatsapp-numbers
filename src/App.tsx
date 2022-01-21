import React, { useState } from 'react';
import './App.css';
import { Input, notification } from 'antd';

function App() {
  const [zipCode, setZipCode] = useState<string>('+51');
  const [number, setNumber] = useState<string>('');
  return (
    <div className="App">
        <h3>Enter the Number</h3>
        <br />
      <div className="container">
        <Input
          className="zipCode"
          placeholder="zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <Input
          className="number"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <img
        alt="WhatsApp Main Page"
        src="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"
        onClick={()=> {
          if (zipCode === "") {
            notification.error({
              message: "Insert the zipCode"
            })
            return
          }
          if (number === "") {
            notification.error({
              message: "Insert the phone number"
            })
            return
          }
          window.open(`https://wa.me/${zipCode}${number}`)
        }}
      >
      </img>
    </div>
  );
}

export default App;
