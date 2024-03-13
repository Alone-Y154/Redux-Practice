import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
// import adminSlice from "./slices/AdminSlice";

const store  = configureStore({
    reducer: {
        users : userSlice,
        // admin : adminSlice
    }
})

export default store;