import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "../store/greetingsSlice";

const store = configureStore({
    reducer: {
        messages: messagesReducer,
    }
});

export default store;
