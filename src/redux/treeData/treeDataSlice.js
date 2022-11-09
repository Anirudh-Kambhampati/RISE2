import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminTreeData: {},
  userTreeData: {},
  researcherTreeData: {},
};

const treeDataSlice = createSlice({
  name: "treeData",
  initialState,
  reducers: {
    setTreeData: (state, { payload }) => {
      state.adminTreeData = payload;
    },
    setUserTreeData: (state, { payload }) => {
      state.userTreeData = payload;
    },
    setResearcherTreeData: (state, { payload }) => {
      state.researcherTreeData = payload;
    },
  },
});

export const { setTreeData, setUserTreeData, setResearcherTreeData } =
  treeDataSlice.actions;

export const getAdminTreeData = (state) => state.treeData.adminTreeData;
export const getUserTreeData = (state) => state.treeData.userTreeData;
export const getResearcherTreeData = (state) =>
  state.treeData.researcherTreeData;

export default treeDataSlice.reducer;
