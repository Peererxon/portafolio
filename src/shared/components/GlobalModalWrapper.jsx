import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../redux/modal/modalSlice';
import ProjectsModal from '../../work/components/ProjectsModal';

// Set the app element for react-modal
// Make sure to replace '#root' with the actual ID of your app's root element if different
Modal.setAppElement('#root');

const componentMap = {
  ProjectsModal,
};

const GlobalModalWrapper = () => {
  const dispatch = useDispatch();
  const { isOpen, modalContent, contentComponentName } = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const ContentComponent = componentMap[contentComponentName];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Global Modal"
    >
      {ContentComponent ? <ContentComponent {...modalContent} /> : null}
    </Modal>
  );
};

export default GlobalModalWrapper;
