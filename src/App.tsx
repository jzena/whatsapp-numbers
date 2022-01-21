import React, { useState } from 'react';
import './App.css';
import donatebtn from './donate-button.png';
import { Input, Modal, notification } from 'antd';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [zipCode, setZipCode] = useState<string>('+51');
  const [number, setNumber] = useState<string>('');
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const openWSPApp = () => {
    if (zipCode === '') {
      notification.error({
        message: 'Insert the zipCode',
      });
      return;
    }
    if (number === '') {
      notification.error({
        message: 'Insert the phone number',
      });
      return;
    }
    window.open(`https://wa.me/${zipCode}${number}`);
  };

  return (
    <div className="App full-height">
      <div className="card">
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
            onPressEnter={openWSPApp}
          />
        </div>
        <img
          alt="WhatsApp Main Page"
          src="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"
          onClick={openWSPApp}
        ></img>
        <br />
        <br />
        <hr />
        <div className="footer">
          <div>Author: Jose Zena</div>
          <div>
            <div>
              <img
                src={donatebtn}
                className="App-logo"
                alt="logo"
                onClick={showModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Donate"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Accounts:
        <br />
        Mi cuenta BBVA:
        <div>CUENTA SUELDO Número de cuenta: 0011-0057-0209589444</div>
        <div>CCI: 011-057-000209589444-76</div>
      </Modal>
    </div>
  );
}

export default App;
