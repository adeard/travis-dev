import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name:"date",
    initialState: {},
    reducers: {
        filterDate: (state, action) => {
            state.vendor_id = action.payload.vendor_id
            state.start_date = action.payload.start_date
            state.end_date = action.payload.end_date
        },
        filterAssignmentDate : (state, action) => {
            state.vendor_id = action.payload.vendor_id
            state.start_date = action.payload.start_date    
            state.end_date = action.payload.end_date    

            if (action.payload.task_status) {
                state.task_status = action.payload.task_status    
            }
        },
        updateTaskList : (state, action) => {
            state.is_update = action.payload.is_update
        }
    }
})

export const {filterDate, filterAssignmentDate, updateTaskList} = dateSlice.actions
export default dateSlice.reducer