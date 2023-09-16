import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    phone: '',
    email: '',
    service: '',
    comment: '',
};

export const userFormSlice = createSlice({
    name: 'userFormSlice',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload;
        },
        setComment: (state, action) => {
            state.comment = action.payload;
        },
    },
});

export const { actions: userFormSliceActions } = userFormSlice;
export const { reducer: userFormSliceReducer } = userFormSlice;
