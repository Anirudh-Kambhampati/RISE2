import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  folderTree: [],
  checkboxData: {},
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    handleFolderTree: (state, { payload }) => {
      state.folderTree = payload;
    },
    updateCheckboxData: (state, { payload }) => {
      state.checkboxData = { ...state.checkboxData, ...payload };
    },
    handleCheckboxData: (state, { payload }) => {
      state.checkboxData[payload.name] = payload.checked;
    },
  },
});

export const { handleFolderTree, updateCheckboxData, handleCheckboxData } =
  adminSlice.actions;

export const getFolderTree = (state) => state.admin.folderTree;
export const getCheckboxData = (state) => state.admin.checkboxData;

export default adminSlice.reducer;
