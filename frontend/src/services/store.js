import {configureStore} from "@reduxjs/toolkit";
import authTokenReducer from "./slices/authSlice"

export default configureStore({
    reducer: {
        authToken: authTokenReducer
    }
})