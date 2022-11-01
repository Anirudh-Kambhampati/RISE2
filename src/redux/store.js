import { configureStore } from '@reduxjs/toolkit';

import adminReducer from './adminPage/adminSlice';

import treeDataReducer from "./treeData/treeDataSlice"

export const store = configureStore({
    reducer:{
        admin : adminReducer,
        treeData : treeDataReducer
    }
})