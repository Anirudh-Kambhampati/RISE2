import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    adminTreeData : {},
    userTreeData : {},
}

const treeDataSlice = createSlice({
    name : "treeData",
    initialState,
    reducers : {
        setTreeData : (state, {payload}) => {
            state.adminTreeData = payload
        },
        setUserTreeData : (state, {payload}) => {
            state.userTreeData = payload;
        }
    }
});

export const { setTreeData, setUserTreeData } = treeDataSlice.actions;

export const getAdminTreeData = state => state.treeData.adminTreeData;
export const getUserTreeData = state => state.treeData.userTreeData

export default treeDataSlice.reducer