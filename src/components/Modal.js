


import logo from "../assets/img/logo-no-background.png";
import { useState } from 'react';

export default function Modal() {

  const [modalOpen, setModal] = useState(false);

  //I don't like arrow functions
  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  };

  return (
    <div>
      {/* If modal is not open show button 
          onClick opens modal.
          Basically vice versa for the other button.
      */}
      {!modalOpen && <button onClick={openModal} className='openButton'>Open Modal</button>}
      {modalOpen && (
        <div className="modal">
            <h2>Presented By:</h2>
            <img src={logo}></img>
            <p>A divison of Ma&Pa GlobalOmniCorp</p>
            <button className='closeButton' onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  )
}
