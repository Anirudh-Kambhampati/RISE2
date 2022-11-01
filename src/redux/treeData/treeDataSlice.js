import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    treeData : []
}

const treeDataSlice = createSlice({
    name : "treeData",
    initialState,
    reducers : {
        setTreeData : (state, {payload}) => {
            state.treeData = payload
        }
    }
});

export const { setTreeData } = treeDataSlice.actions;

export const getTreeData = state => state.treeData.treeData

export default treeDataSlice.reducer