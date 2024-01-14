import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement(document.body);

const CustomModal = ({ isOpen, closeModal, imageSrc }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
      shouldCloseOnOverlayClick={true}
    >
      <img src={imageSrc} alt="Modal" />
    </Modal>
  );
};

export default CustomModal;
