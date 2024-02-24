import React, { useState } from 'react';
import '../Modal.css'; // Import your CSS file for styling

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <div className="modal-content">
              <h2>Modal Title</h2>
              <p>This is the content of the modal.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
