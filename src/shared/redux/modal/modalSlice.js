import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalContent: null,
  contentComponentName: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contentComponentName = action.payload.contentComponentName;
      state.modalContent = action.payload.modalContent;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contentComponentName = null;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
