import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, action) => {
            const articul = action.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minus: (state, action) => {
            const articul = action.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]--;
            if (state.value[articul] === 0) delete state.value[articul];
        },
        zero: (state, action) => {
            const articul = action.payload;
            delete state.value[articul];
        }
    }
});

export const { increment, minus, zero } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;