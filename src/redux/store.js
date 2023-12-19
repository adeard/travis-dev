import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./slices/dateSlice";

const store = configureStore({
    reducer : {date_statistic: dateSlice}
})

// console.log("on create store : ", store.getState())

// store.subscribe(() => {
//     console.log("STORE CHANGE : ", store.getState())
// })

export default store