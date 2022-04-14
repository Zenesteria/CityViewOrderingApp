import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
    name: 'messages',
    initialState: {
        Messages: []
    },
    reducers:{
        addMessage: (state, action) => {
            state.Messages = [];
            state.Messages.push({msgInfo: action.payload})
        },
        resetMessages: state => {
            state.Messages = []
        }

    }
});

export default msgSlice.reducer
export const { addMessage, resetMessages } = msgSlice.actions;