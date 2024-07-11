import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    showButton: true,
    title: "PD's Coding | Portfolio | v1.0",
    currentDate: new Date(),
    showScrollDownButton: true,
    analyticsInternModalIsOpen: false,
    ase1IsOpen: false,
    ase2IsOpen: false
};

const counterSlice = createSlice({
    name: 'rootStore',
    initialState,
    reducers: {
        setShowButton: (state, action) => {
            state.showButton = action.payload.value;
        },
        setAnalyticsInternModalIsOpen: (state, action) => {
            state.analyticsInternModalIsOpen = action.payload.value;
        },
        setScrollDownButton: (state, action) => {
            state.showScrollDownButton = action.payload.value;
        },
        setAse1IsOpen: (state, action) => {
            state.ase1IsOpen = action.payload.value;
        },
        setAse2IsOpen: (state, action) => {
            state.ase2IsOpen = action.payload.value;
        }
    }
});

export const reduxActions = counterSlice.actions;

const store = configureStore({
    reducer: {
        rootStore: counterSlice.reducer
    }
});

export default store;