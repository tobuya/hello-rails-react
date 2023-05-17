import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [], loading: false
};

const messagesSlice = createSlice ({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
});

export const { setMessages } = messagesSlice.actions;

const fetchMessages = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("/api/greetings");
            const data = await response.json();
            console.log(data)
            dispatch(setMessages(data))
        }catch (error) {
            console.error(error);
        }
    };
};

export default messagesSlice.reducer;
export { fetchMessages };
