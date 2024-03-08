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
            state.vehicle_no = action.payload.vehicle_no ?? ""
            state.driver_name = action.payload.driver_name ?? ""
            state.jenis_kirim = action.payload.jenis_kirim ?? ""
            state.shipto_name = action.payload.shipto_name ?? ""            
            state.vehicle_type = action.payload.vehicle_type ?? ""            
            state.receive_date = action.payload.receive_date ?? ""            
            state.shipto_street = action.payload.shipto_street ?? ""            
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