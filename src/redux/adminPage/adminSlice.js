import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folderTree: [],
  userCheckboxData: {},
  researcherCheckboxData: {},
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    handleFolderTree: (state, { payload }) => {
      state.folderTree = payload;
    },
    updateCheckboxData: (state, { payload }) => {
      state.userCheckboxData = { ...state.checkboxData, ...payload };
    },
    handleUserCheckboxData: (state, { payload }) => {
      state.userCheckboxData[payload.name] = payload.checked;
    },
    handleResearcherCheckboxData: (state, { payload }) => {
      state.researcherCheckboxData[payload.name] = payload.checked;
    },
  },
});

export const {
  handleFolderTree,
  updateCheckboxData,
  handleUserCheckboxData,
  handleResearcherCheckboxData,
} = adminSlice.actions;

export const getFolderTree = (state) => state.admin.folderTree;
export const getUserCheckboxData = (state) => state.admin.userCheckboxData;
export const getResearcherCheckboxData = (state) =>
  state.admin.researcherCheckboxData;

export default adminSlice.reducer;
