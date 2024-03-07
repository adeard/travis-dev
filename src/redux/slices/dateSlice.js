import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name:"date",
    initialState: {},
    reducers: {
        filterDate: (state, action) => {
            state.vendor_id = action.payload.vendor_id ?? ""
            state.start_date = action.payload.start_date ?? ""
            state.end_date = action.payload.end_date ?? ""
        },
        filterAssignmentDate : (state, action) => {
            state.vbeln = action.payload.vbeln ?? ""
            state.erdat = action.payload.erdat ?? ""
            state.bldat = action.payload.bldat ?? ""
            state.taskid = action.payload.taskid ?? ""
            state.sort_by = action.payload.sort_by ?? ""
            state.end_date = action.payload.end_date ?? ""   
            state.order_by = action.payload.order_by ?? ""
            state.vendor_id = action.payload.vendor_id ?? ""
            state.start_date = action.payload.start_date ?? ""
            state.jenis_kirim = action.payload.jenis_kirim ?? ""
            state.pick_location = action.payload.pick_location ?? ""            

            if (action.payload.task_status) {
                state.task_status = action.payload.task_status ?? ""
            }
        },
        updateTaskList : (state, action) => {
            state.is_update = action.payload.is_update ?? ""
        }
    }
})

export const {filterDate, filterAssignmentDate, updateTaskList} = dateSlice.actions
export default dateSlice.reducer