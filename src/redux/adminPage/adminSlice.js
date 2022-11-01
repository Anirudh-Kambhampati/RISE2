import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    folderTree : [],
}

export const adminSlice = createSlice({
    name : 'admin',
    initialState,
    reducers: {
        handleFolderTree : (state,{payload}) => {
            state.folderTree = payload
        }
    },
})

export const { handleFolderTree } = adminSlice.actions;

export const getFolderTree = (state) => state.admin.folderTree;

export default adminSlice.reducer;